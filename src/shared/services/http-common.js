import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:8080",
    headers: { "Accept" : "application/json", "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"}
});