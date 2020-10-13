import Axios from "../axios";
import axios from "axios";

export let registerRequest = (formData) => {
    return Axios.post(`auth/register`, formData)
};

export let loginRequest = (formData) => {
    if (!checkAuth()){
        axios.get('http://localhost/api/csrf-cookie').then(res => {
            return Axios.post(`auth/login`, formData)
        })
    }
};

export let checkAuth = () => {
    let isAuth = false;
    Axios.get(`auth/user`).then( res => isAuth = res.data.message !== "Unauthenticated.")

    return isAuth;
};