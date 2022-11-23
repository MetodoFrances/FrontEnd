import axios from "axios";

export default axios.create({
  baseURL: "https://leasingfy-back.herokuapp.com",
  headers: { "Accept": "application/json", "Content-Type": "application/json" },
});
