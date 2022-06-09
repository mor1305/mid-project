import axios from "axios";

export const productsApi = axios.create({
  baseURL: `https://fakestoreapi.com/products`,
});

export const getProducts = async () => {
  try {
    const { data: products } = await productsApi.get();
    return products;
  } catch (error) {
    console.log(error);
  }
};

