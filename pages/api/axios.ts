import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export type HttpMethod = "get" | "post" | "put" | "delete";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const getCookie = (accessToken) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${accessToken}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() ?? null;
  }
  return null;
};

const refreshToken = async () => {
  const refreshToken =
    localStorage.getItem("refreshToken") || getCookie("refreshToken");
  if (!refreshToken) {
    throw new Error("Refresh token not found!");
  }

  const response = await axiosInstance.post("/refresh", { refreshToken });
  return response.data.accessToken;
};

// 요청 인터셉터 추가하기
axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = config.headers ?? {};

    let token = localStorage.getItem("accessToken") || getCookie("accessToken");

    if (!token) {
      token = await refreshToken();
      localStorage.setItem("accessToken", token);
    }
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function apiCall<T, U>(
  method: "get" | "post" | "put" | "delete",
  endPoint: string,
  data?: U,
  config?: AxiosRequestConfig
) {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      method,
      url: endPoint,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`HTTP error! status: ${axiosError.response?.status}`);
  }
}
