import axios from "axios";

export const usersApi = axios.create({
  baseURL: `https://628f99b40e69410599df7105.mockapi.io/usersLoginInfo`,
});

export const getuUers = async () => {
  try {
    const { data: users } = await usersApi.get();
    return users;
  } catch (error) {
    console.log(error);
  }
};
