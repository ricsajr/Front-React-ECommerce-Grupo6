import axios from "axios";

const api = axios.create({
	baseURL: "https://ecommerce-api-penguin.herokuapp.com",
});

export default api;
