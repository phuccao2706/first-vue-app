<template>
  <nav>
    <v-toolbar flat app class="grey lighten-4">
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">vue</span>
        <span>app</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="grey">
        <span>Sign In</span>
        <v-icon right>mdi-vuetify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" color="pink lighten-4">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          link
          v-for="link in links"
          v-bind:key="link.title"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", title: "Dashboard", route: "/" },
        { icon: "folder", title: "My Project", route: "/project" },
        { icon: "person", title: "Team", route: "/team" },
      ],
    };
  },
};
</script>
