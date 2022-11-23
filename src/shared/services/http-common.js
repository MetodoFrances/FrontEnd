import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090",
  headers: { "Accept": "application/json", "Content-Type": "application/json" },
});
