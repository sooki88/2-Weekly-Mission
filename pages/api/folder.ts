import { ServiceResponse, service } from "./axios";

type FoldersResponseType = any;

export const getFolders = (): Promise<ServiceResponse<FoldersResponseType>> => {
  return service("get", "/users/1/folders");
};

// export const getFolders = (): Promise<ServiceResponse<FoldersResponseType>> => {
//   return service("get", "/users/1/folders").then((response) => ({
//     data: response.data,
//     errorMessage: response.errorMessage ?? null, // Set errorMessage to null if it's undefined
//   }));
// };
