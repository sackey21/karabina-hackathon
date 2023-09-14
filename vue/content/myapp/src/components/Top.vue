<template>
  <v-container>
    <v-row>
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
          <router-link to="/map">MAP</router-link>
          <router-link to="/ar">アップ体験</router-link>
          <router-link to="/ar">芝被り体験</router-link>
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
    Premium: [
      {
        text: "試合アーカイブ",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
    ],
  }),
});
</script>
