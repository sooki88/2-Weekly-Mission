import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type HttpMethod = "get" | "post" | "put" | "delete";
export interface ServiceResponse<T> {
  data?: T | null;
  errorMessage: string | null;
}

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function service<T, U>(
  method: HttpMethod,
  url: string,
  data?: U,
  config?: AxiosRequestConfig
): Promise<ServiceResponse<T>> {
  try {
    const request: AxiosRequestConfig = {
      url,
      method,
      data,
      ...config,
    };
    const response: AxiosResponse<T> = await axiosInstance(request);
    return { data: response.data, errorMessage: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message;
      return { data: null, errorMessage };
    } else {
      console.error(`${method} Error : `, error);
      throw error;
    }
  }
}
