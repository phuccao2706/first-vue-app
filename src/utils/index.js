export const isLoggedIn = () => {
  const accessKey = localStorage.getItem("access-token");

  return !!accessKey;
};

export const setAccessToken = (accessToken) => {
  console.log(accessToken);
  localStorage.setItem("access-token", accessToken);
};
