import axios from "axios";

export const usersApi = axios.create({
  baseURL: `https://628f99b40e69410599df7105.mockapi.io/usersLoginInfo`,
});

export const getUsers = async () => {
  try {
    const { data: users } = await usersApi.get();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  const { data: user } = await usersApi.get("/" + id);
  return user;
};

export const createUser = async () => {
  const { data: newUser } = await usersApi.post();
  return newUser;
};

export const updateUser = async (id) => {
  const { data: user } = await usersApi.put("/" + id);
  return user;
};

export const deleteUser = async (id) => {
  await usersApi.delete("/" + id);
  return null;
};
