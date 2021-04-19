/*
import axios from "axios";

export const baseURL = "http://localhost:7542/2.0"

export const instance = axios.create({baseURL, withCredentials: true})


export const AuthAPI = {
    getAuthMe() {
        return instance.post(`auth/me`,)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/me`)
    }
}
*/


import { mockFetch } from "./mock-fetch";

export function getEmployees() {
    return mockFetch("/api/employees");
}

export function getWorklog() {
    return mockFetch("/api/employees/worklog");
}




