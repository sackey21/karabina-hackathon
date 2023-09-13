<template>
  <v-container>
    <v-card>
      <v-card-title>名前の入力</v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="名前を入れて「送信する」を押してください">
        </v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text color="primary" v-on:click="submitForm"> 送信する </v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>メッセージ</v-card-title>
      <v-card-text>
        <h4>{{ message }}</h4>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>名前の文字数カウント</v-card-title>
      <v-card-text>
        <h4>{{ length }}</h4>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script type="module">
  import axios from "axios";
  export default {
    name: "HelloWorld",
    data: () => ({
      name: "test",
      message: "ここにメッセージが表示されます",
      length: "ここに名前の文字数が表示されます",
    }),
    methods: {
      submitForm: async function () {
        const res = await axios.post("http://localhost:8080/api/greetings", {
          name: this.name,
        });
        this.message = res.data.message;
        const res_length = await axios.post("http://localhost:8080/api/namelength", {
          name: this.name,
        });
        this.length = res_length.data.length;
      },
    },
  };
</script>
