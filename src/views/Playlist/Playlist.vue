<template>
  <div class="playlist">
    <p class="text-h3 ml-5 mt-5 pink--text text--lighten-4">playlist</p>

    <v-container>
      <v-row>
        <!-- <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="250"
          max-width="250"
          :src="playlist.images[0].url"
        ></v-img> -->

        <div>{{ playlist.name }}</div>
      </v-row>
    </v-container>

    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">hihi</th>
          <th class="text-left">Song</th>
          <th class="text-left">Artist</th>
          <th class="text-left">Album</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({ track }, i) in items" :key="track.id">
          <td class="grey--text text--darken-1">{{ i + 1 }}</td>
          <td>
            <v-btn @click="playASong(track.uri)" depressed elevation="2"
              >play</v-btn
            >
          </td>
          <td>{{ track.name }}</td>
          <td class="grey--text text--darken-1">
            {{ track.artists[0].name }}
          </td>
          <td class="grey--text text--darken-1">{{ track.album.name }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import router from "@/router";
import { getPlaylistDetail } from "@/services";

export default {
  name: "Playlist",
  data: () => ({
    playlist: {},
    items: [],
  }),
  methods: {
    async _getPlaylistDetail(id) {
      const data = await getPlaylistDetail(id);
      console.log(data);
      this.playlist = data;
      this.items = data.tracks.items;
    },
    playASong(uri) {
      this.play(uri, window.spotifyPlayer);
    },
    play(spotify_uri, playerInstance) {
      const getOAuthToken = playerInstance._options.getOAuthToken;
      const id = playerInstance._options.id;
      getOAuthToken((access_token) => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
          method: "PUT",
          body: JSON.stringify({ uris: [spotify_uri] }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        });
      });
    },
  },

  mounted() {
    const id = router.currentRoute.params.id;
    this._getPlaylistDetail(id);
  },
};
</script>

<style scoped>
.category--title {
  transition: all 0.3s ease;
  user-select: none;
  cursor: pointer;
}

.category--title:hover {
  transition: all 0.3s ease;
  color: #f8bbd0;
}
</style>
