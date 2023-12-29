import { mapFolderData } from "../util-map/mapFolderData";
import { useAsync } from "../../sharing/util/useAsync";
import { axiosInstance } from "../../sharing/util/axiosInstance";

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
