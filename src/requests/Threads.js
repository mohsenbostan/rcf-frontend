import Axios from "../axios";

export let threadsListRequest = (page) => {
    return Axios.get(`threads?page=${page}`)
};

export let getSingleThreadRequest = (slug) => {
    return Axios.get(`threads/${slug}`)
};

export let createNewThreadRequest = (formData) => {
    return Axios.post(`threads`, formData)
};