<template>
  <div class="d-flex flex-column">
    <v-avatar
      v-if="this.$store.state.currentSong.album"
      class="mx-auto my-3"
      size="100"
      tile
    >
      <v-img :src="this.$store.state.currentSong.album.images[0].url"></v-img>
    </v-avatar>

    <div class="black--text text--lighten-1">
      {{ this.$store.state.currentSong.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerControl",
};
</script>
