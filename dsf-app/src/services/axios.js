import axios from "axios";

export const instanceAxios = axios.create({
    baseURL: "https://dsf-hackaton.herokuapp.com",
    timeout: 10000,
    headers: { 
        "Content-Type": "application/json" 
    }
});
