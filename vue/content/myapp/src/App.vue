<template>
  <div>
    <Header />
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Top from "./components/Top.vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Top,
  },

  data: () => ({
    //
  }),
});
</script>
