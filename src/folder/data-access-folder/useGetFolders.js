import { axiosInstance } from "../../sharing/util/axiosInstance";
import { useAsync } from "../../sharing/util/useAsync";

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = data?.data ?? [];
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
