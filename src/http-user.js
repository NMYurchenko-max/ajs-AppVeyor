import { httpGet, httpPost, httpDelete, httpPut } from "./http";

export const apiGet = async (path) => httpGet(`/api/${path}`);
export const apiPost = async (path, payload) => httpPost(`/api/${path}`, payload);
export const apiDelete = async (path) => httpDelete(`/api/${path}`);
export const apiPut = async (path, payload) => httpPut(`/api/${path}`, payload);

export const getUsers = async () => {
    const { data } = await apiGet('users');
    return data;
};

export const createUser = async (userData) => {
    const { data } = await apiPost('users', userData);
    return data;
};

export const updateUser = async (userId, userData) => {
    const { data } = await apiPut(`users/${userId}`, userData);
    return data;
};

export const deleteUser = async (userId) => {
    await apiDelete(`users/${userId}`);
};
