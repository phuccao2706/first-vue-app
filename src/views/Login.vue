<template>
  <div class="login">
    <v-btn
      @click="this.anotherLogin"
      :loading="this.isLoading"
      class="pink white--text"
      >Login</v-btn
    >
  </div>
</template>

<script>
import router from "@/router";
import { setAccessToken } from "@/utils";
import initPlayer from "@/utils/initPlayer";

export default {
  name: "Login",
  data: () => ({
    isLoading: false,
  }),
  methods: {
    async _getToken(accessToken) {
      setAccessToken(accessToken);
      router.push("/");
      return accessToken;
    },
    anotherLogin() {
      const { VUE_APP_CLIENT_ID } = process.env;
      const redirect_uri = "http://localhost:8080/Login";
      const scopes = "streaming, user-read-email, user-read-private";

      let popup = window.open(
        `https://accounts.spotify.com/authorize?client_id=${VUE_APP_CLIENT_ID}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`,
        "Login with Spotify",
        "width=800,height=600"
      );

      window.spotifyCallback = (payload) => {
        popup.close();
        this._getToken(payload);
        initPlayer();
      };
    },
  },
  mounted() {
    const token = window.location.hash.substr(1).split("&")[0].split("=")[1];

    if (token) {
      window.opener.spotifyCallback(token);
    }
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}
</style>
