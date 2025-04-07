export const fetchUsers = async () => {
    try {
        const apiUrl = "http://10.176.16.65:5000/api/users/get-users";  

        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",              
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch users. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Users data:", data);
        return data; 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

export const updateUserLocation = async (userId, latitude, longitude) => {
    try {
        const response = await fetch("http://10.176.16.65:5000/api/updateLocation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                latitude,
                longitude,
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to update location. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Location updated:", data);
        return data;
    } catch (error) {
        console.error("Error updating location:", error);
        return null;
    }
};
