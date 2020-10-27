import Axios from "../axios";

export let threadsListRequest = (page) => {
    return Axios.get(`threads?page=${page}`)
};

export let createNewThreadRequest = (formData) => {
    return Axios.post(`threads`, formData)
};