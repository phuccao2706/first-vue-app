import { COMMIT_KEYS } from "@/appConstants.js";

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

export const playASong = (track, playerInstance, storeInstance) => {
  const getOAuthToken = playerInstance._options.getOAuthToken;
  const id = playerInstance._options.id;
  storeInstance.commit(COMMIT_KEYS.SET_CURRENT_SONG, track);

  getOAuthToken((access_token) => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
      method: "PUT",
      body: JSON.stringify({ uris: [track.uri] }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });
  });
};
