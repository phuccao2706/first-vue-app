export const isLoggedIn = () => {
  const accessKey = localStorage.getItem("access-token");

  return !!accessKey;
};

export const setAccessToken = (accessToken) => {
  localStorage.setItem("access-token", accessToken);
};

export const removeAccesstoken = () => {
  localStorage.removeItem("access-token");
};
