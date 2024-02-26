export const endpoint = {
  register: "/auth/sign-up",
  login: "/auth/sign-in",
  user: "/users",
  folders: "/folders",
  linksByFolderId: (folderId) => `/folders/${folderId}/links`,
};
