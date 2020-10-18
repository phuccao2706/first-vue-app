<template>
  <v-app class="pink">
    <div>
      <Navbar />
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  mounted() {
    console.log(localStorage.getItem("access-token"));
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = localStorage.getItem("access-token");
      const player = new window.Spotify.Player({
        name: "Web Playback SDK Quick Start Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
      });

      // Connect to the player!
      player.connect();

      window.spotifyPlayer = player;
    };
  },
};
</script>
