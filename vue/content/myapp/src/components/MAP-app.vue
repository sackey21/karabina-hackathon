<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h2 class="display-1 font-weight-bold">スタジアム周辺マップ</h2>
    </v-card-title>
    <v-tabs v-modelfixed-tabs bg-color="indigo-darken-2">
      <v-tab href="#nara"> ロートフィールド奈良（奈良市鴻ノ池陸上競技場） </v-tab>
      <v-tab href="#kashihara"> 橿原公苑陸上競技場 </v-tab>
      <v-tab-item value="nara">
        <Nara />
      </v-tab-item>
      <v-tab-item value="kashihara">
        <Kashihara />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import Vue from "vue";
import Kashihara from "./map/Kashihara";
import Nara from "./map/Nara";

export default Vue.extend({
  name: "MAP",
  data: () => ({}),

  components: {
    Kashihara,
    Nara,
  },
});
</script>
