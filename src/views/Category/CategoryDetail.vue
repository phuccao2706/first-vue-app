<template>
  <div class="category-detail">
    <p class="text-h3 ml-5 mt-5 pink--text text--lighten-4">
      <!-- {{ this.categoryDetail.name }} -->
    </p>

    <v-container>
      <v-row>
        <v-col
          v-for="playlist in playlists"
          v-bind:key="playlist.id"
          class="md-4"
        >
          <v-card
            class="mx-auto"
            min-width="275px"
            max-width="275px"
            @click="navigateToDetail(playlist.id)"
          >
            <v-img
              class="white--text align-end"
              height="275px"
              :src="playlist.images[0].url"
            >
              <v-card-title class="category--title">
                {{ playlist.name }}
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import router from "@/router";
import { getCategoryPlaylists } from "@/services";

export default {
  Name: "CategoryDetail",
  data: () => ({
    playlists: [],
  }),
  methods: {
    navigateToDetail(id) {
      router.push({ name: "Playlist", params: { id } });
    },
    async _getCategoryPlaylists(id) {
      const { playlists } = await getCategoryPlaylists(id);
      this.playlists = playlists.items;
    },
  },

  mounted() {
    const id = router.currentRoute.params.id;
    this._getCategoryPlaylists(id);
  },
};
</script>
