import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Alert, PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { WebView } from "react-native-webview";

const MapViewComponent = () => {
  const [location, setLocation] = useState(null);
  const webViewRef = useRef(null);

  // Request location permission
  const requestLocationPermission = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  // Get user location
  const getUserLocation = async () => {
    const permission = await requestLocationPermission();
    if (!permission) {
      Alert.alert("Permission Denied", "Location permission is required!");
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Send location data to WebView
        if (webViewRef.current) {
          webViewRef.current.injectJavaScript(`
            document.dispatchEvent(new MessageEvent('message', {data: '${JSON.stringify({ latitude, longitude })}'}));
          `);
        }
      },
      (error) => {
        console.log("Geolocation Error:", error);
        Alert.alert("Error", "Unable to fetch location.");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  // Inject Leaflet Map HTML + JavaScript
  const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        #map { height: 100vh; width: 100vw; }
      </style>
      <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    </head>
    <body>
      <div id="map"></div>
      <script>
        var map = L.map('map').setView([0, 0], 2); // Default view

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        document.addEventListener("message", function(event) {
          var location = JSON.parse(event.data);
          if (location && location.latitude && location.longitude) {
            map.setView([location.latitude, location.longitude], 13);
            L.marker([location.latitude, location.longitude])
              .addTo(map)
              .bindPopup('Your Location')
              .openPopup();
          }
        });
      </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: mapHtml }}
        style={{ flex: 1 }}
        ref={webViewRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" }
});

export default MapViewComponent;
