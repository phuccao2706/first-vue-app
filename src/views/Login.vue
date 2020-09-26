<template>
  <div class="login">
    <v-btn
      @click="this._getToken"
      :loading="this.isLoading"
      class="pink white--text"
      >Login</v-btn
    >
  </div>
</template>

<script>
import router from "@/router";
import { getToken } from "@/services";
import { setAccessToken } from "@/utils";
export default {
  name: "Login",
  data: () => ({
    isLoading: false,
  }),
  methods: {
    async _getToken() {
      this.isLoading = true;
      const accessToken = await getToken();
      this.isLoading = false;

      setAccessToken(accessToken);
      console.log(router);
      router.push("/");
      return accessToken;
    },
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
