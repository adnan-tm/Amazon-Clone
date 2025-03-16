import axios from "axios";

const axiosInstance = axios.create({
    // baseURL:"http://127.0.0.1:5001/clone-3663c/us-central1/api",
    baseURL: "https://api-ow42ihz4ma-uc.a.run.app"
});


export {axiosInstance}