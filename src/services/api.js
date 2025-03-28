import axios from "axios";

const API_URL = "https://reqres.in/api/";

export const getUsers = (page) => axios.get(`${API_URL}users?page=${page}`);

export const deleteUser = (id) => axios.delete(`${API_URL}users/${id}`);
