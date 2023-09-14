<template>
  <v-app>
    <v-container>
      <v-app-bar app shrink-on-scroll color="rbga(255,0,0,0.5)" elevation="24">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <v-row align-content="center">
          <v-toolbar-title router-link to="/">ならくらぶ</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn router-link to="/map" text>MAP</v-btn>
            <v-btn router-link to="/ar" text>AR</v-btn>
          </v-toolbar-items>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-row>
      </v-app-bar>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data: () => ({}),
});
</script>
