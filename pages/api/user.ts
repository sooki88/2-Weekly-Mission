import { ServiceResponse, service } from "./axios";

export type UserResponse = {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
};

export const getUser = (): Promise<ServiceResponse<UserResponse>> => {
  return service("get", "/sample/users");
};
