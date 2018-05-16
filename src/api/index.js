import axios from "axios"

export const http = axios.create({
    baseURL : "http://localhost:9090/semive/api",
    timeout : 10000,
    headers : {
        "Access-Control-Allow-Origin": "*",
        "Content-Type" : "application/json"
    }
})