export const getToken = async () => {
  const { VUE_APP_CLIENT_ID, VUE_APP_CLIENT_SECRET } = process.env;
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + btoa(VUE_APP_CLIENT_ID + ":" + VUE_APP_CLIENT_SECRET),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};
