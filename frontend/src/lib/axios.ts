import axios from "axios";

// Set your Render backend URL here
const PROD_API_URL = "https://realtime-spotify-clone-backend.onrender.com/api";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development"
		? "http://localhost:5000/api"
		: PROD_API_URL,
});
