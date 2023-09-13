<template>
  <v-sheet class="pa-0" :light="true" width="100%" height="100vh">
    <v-sheet id="map" class="pa-0" :light="true" style="width: 100%; height: 100vh">
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
    var markerLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([135.8285, 34.69722])),
          }),
        ],
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 46],
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          src: "https://openlayers.org/en/latest/examples/data/icon.png",
        }),
      }),
    });

    // 地図の中心を指定します。表示する座標系に注意してください。
    let center = new transform([135.82840893, 34.69721741], "EPSG:4326", "EPSG:3857");
    var map = new Map({
      controls: false,
      layers: [
        var wms_layer_map = new OpenLayers.Layer.WMS('Base layer','http://vmap0.tiles.osgeo.org/wms/vmap0',
        { layers : 'basic'},
        {	isBaseLayer : true}
        );
        markerLayer,
      ],
      target: "map",
      view: new View({
        center: center,
        zoom: 17,
      }),
    });
  },
  methods: {},
};
</script>
