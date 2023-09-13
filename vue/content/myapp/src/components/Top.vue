<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Tickets</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in Tickets"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Contents</h2>
        <v-row justify="center">
          <a
            v-for="(link, i) in Contents"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">アーカイブ(会員限定)</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in Premium"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import MAP from "./MAP-app.vue";
import AR from "./AR-app.vue";

export default Vue.extend({
  name: "Top",
  data: () => ({
    Tickets: [
      {
        text: "前売り券",
        href:
          "https://www.jleague-ticket.jp/club/nc/?utm_source=KU&utm_medium=web&utm_campaign=20230101_ticket_page",
      },
      {
        text: "年間パス",
        href: "https://www.store-naraclub.jp/SHOP/207290/list.html",
      },
    ],
    Contents: [
      {
        text: "観光MAP",
        components: {
          MAP,
        },
      },
      {
        text: "芝被り体験",
        components: {
          AR,
        },
      },
      {
        text: "アップ体験",
        components: {
          AR,
        },
      },
    ],
    Premium: [
      {
        text: "試合アーカイブ",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
    ],
  }),
});
</script>
