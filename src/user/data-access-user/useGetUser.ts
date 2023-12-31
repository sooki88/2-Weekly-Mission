import { useAsync } from "../../sharing/util/useAsync";
import { axiosInstance } from "../../sharing/util/axiosInstance";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
