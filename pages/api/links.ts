import { ServiceResponse, service } from "./axios";

type LinksResponseType = any;

// export const getLinksAll = (): Promise<ServiceResponse<LinksResponseType>> => {
//   return service("get", "/users/1/links");
// };

export const getLinksAll = (): Promise<ServiceResponse<LinksResponseType>> => {
  return service("get", "/users/1/links").then((response) => ({
    data: response.data,
    errorMessage: response.errorMessage ?? null, // Set errorMessage to null if it's undefined
  }));
};

export const getLinksById = (
  q: any
): Promise<ServiceResponse<LinksResponseType>> => {
  return service("get", `/users/1/folders/${q}/links`);
};
