import { endpoint } from "./address";
import { apiCall } from "./axios";

export const getFolders = async () => {
  return await apiCall<any>("get", endpoint.folders);
};
