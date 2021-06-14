<template>
  <div class="hello">
    <p> {{ sitecount }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "sitecount",
  data(){
    return{
      sitecount:"",
    }
  },
  created() {
    this.sendGet();
        this.timer = setInterval(this.sendGet, 300000);
  },
  methods: {
    sendGet() {
      //格式b
      axios
      .get("https://www.agribigdata.net/avbts/getSiteCount", {
      //  .get("http://localhost:8080/CloudRanch/getSiteCount", {
          params: {
          },
        })
        .then((resp) => {
          console.log(resp.data);
          this.sitecount=resp.data
        })
        .catch((err) => {
          //
          console.log("请求失败：" + err.status + "," + err.statusText);
        });
    },
 cancelAutoUpdate: () => {
      clearInterval(this.timer);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>