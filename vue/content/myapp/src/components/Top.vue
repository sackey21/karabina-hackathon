<template>
  <v-app>
    <!-- header -->
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="@/assets/top-images/deer.png"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-app-bar-title justify="center">TOP PAGE</v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>Ticket</v-tab>
            <v-tab>AR</v-tab>
            <v-tab>MAP</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
        <v-container style="height: 300px"></v-container>
      </v-sheet>

      <!-- header -->

      <v-container style="height: 300px">
        <v-carousel
          class="mt-n100 mb-20"
          cycle
          height="300"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            cycle
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-container>
      <v-main>
        <v-container class="mt-100px">
          <div id="app">
            <v-app id="inspire">
              <v-row
                justify="center"
                class="font-weight-black mt-30px text-h6"
                white-space="pre-line"
              >
                </v-row
              >
              <v-row justify="center" class="font-weight-black mt-30px text-h6">
                試合日程
              </v-row>
              <v-row justify="center" class="mt-n20">
                <v-date-picker
                  v-model="picker"
                  color="blue"
                  locale="ja-jp"
                  :day-format="(date) => new Date(date).getDate()"
                ></v-date-picker>
              </v-row>
              <v-row justify="center" class="font-weight-black mt-30px text-h6">
                NEWS
              </v-row>
            </v-app>
          </div>
        </v-container class="mt-100px">
        <v-container>
          <v-row>
            <v-col v-for="n in 6" :key="n" cols="4">
              <v-card
                height="150"
                width="150"
                class="align-center pt-10"
                justify="center"
              >
                <v-img
                  :src="require('@/assets/top-images/nara.png')"
                  height="70"
                  width="70"
                  class="white--text align-end"
                  justify="center"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-card>
  </v-app>
</template>

<script lang="js">
import Vue from "vue";
import Vuetify from "vuetify";

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
    }
  },
})
</script>
<script lang="ts">
import Vue from "vue";
import Header from "./components/header.vue";

export default Vue.extend({
  name: "Top-page",

  data: () => ({
    items: [
      {
        src: require("../assets/top-images/1.jpg"),
      },
      {
        src: require("../assets/top-images/2.jpg"),
      },
      {
        src: require("../assets/top-images/3.jpg"),
      },
      {
        src: require("../assets/top-images/siba.jpg"),
      },
    ],
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
});
</script>
