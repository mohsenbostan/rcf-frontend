import Axios from "../axios";
import axios from "axios";

export let registerRequest = (formData) => {
    return Axios.post(`auth/register`, formData)
};

export let loginRequest = async (formData) => {
    if (!checkAuth()) {
        let loginReq
        await axios.get('http://localhost/api/csrf-cookie').then(res => {
            loginReq = Axios.post(`auth/login`, formData)
        })

        return loginReq
    }
};

export let getUserDataRequest = () => {
    if (checkAuth()) {
        return Axios.get(`auth/user`)
    }
};

export let checkAuth = () => {
    let isAuth = false;
    Axios.get(`auth/user`).then( res => isAuth = res.data.message !== "Unauthenticated.")

    return isAuth;
};