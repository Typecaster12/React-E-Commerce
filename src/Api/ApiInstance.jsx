import axios from 'axios';

//axios instance;
const Api = axios.create({
    baseURL: "https://fakestoreapi.com",
});

//get request for product lists;
export const getProductDetails = async() => {
    const response = await Api.get('/products');
    return response.data;
}

// key = /products