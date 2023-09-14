<template>
  <v-sheet class="pa-0" :light="true" width="100%" height="100vh">
    <v-sheet id="map-nara" class="pa-0" :light="true" style="width: 100%; height: 100vh">
    </v-sheet>
  </v-sheet>
</template>
<script>
import { Map, View } from "ol";
import TitleLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { transform } from "ol/proj";

export default {
  name: "Kashihara",
  props: [],

  data: function () {
    return {};
  },

  computed: {},
  mounted: function () {
    // 地図の中心を指定します。表示する座標系に注意してください。
    let center = new transform([135.82840893, 34.69721741], "EPSG:4326", "EPSG:3857");
    var map = new Map({
      controls: false,
      layers: [
        new TitleLayer({
          source: new OSM(),
        }),
      ],
      target: "map-nara",
      view: new View({
        center: center,
        zoom: 17,
      }),
    });

    const controls = map.getControls();
    controls.forEach((control) => map.removeControl(control));
  },
  methods: {},
};
</script>
