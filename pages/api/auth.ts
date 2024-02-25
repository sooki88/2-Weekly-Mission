import { endpoint } from "./address";
import { apiCall } from "./axios";

export const registerUser = async (signUpData: any) => {
  return await apiCall<any>("post", endpoint.register, signUpData);
};

export const loginUser = async (loginData: any) => {
  return await apiCall<any>("post", endpoint.login, loginData);
};
