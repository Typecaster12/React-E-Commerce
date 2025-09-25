import axios from 'axios';

//axios instance;
const Api = axios.create({
    baseURL: "https://fakestoreapi.com",
});

//get request for product lists;
export const getProductDetails = async () => {
    const response = await Api.get('/products');
    return response.data;
}

//fetching for dynamic route(individual product detail);
export const getIndvProduct = async (id) => {
    const response = await Api.get(`/products/${id}`);
    // console.log(response.data);
    return response.data;
}