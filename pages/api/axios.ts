import axios, { AxiosError, AxiosResponse } from "axios";

export type HttpMethod = "get" | "post" | "put" | "delete";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function apiCall<T>(
  method: "post" | "put" | "delete" | "patch",
  endPoint: string,
  data?: any
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      method,
      url: endPoint,
      data,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`HTTP error! status: ${axiosError.response?.status}`);
  }
}
