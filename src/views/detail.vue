<template>
  <div>
    <div class="detail-name">{{ name }}<img v-if="hot" src="../assets/hot.png"></div>
    <div class="box">
      <div class="detail-img">
        <img :src='picture' alt="">
      </div>
      <div class="detail-info">
        {{ introduce }}
      </div>
    </div>
    <h2>剧情简介</h2>
    <div class="detail-indent">
      {{ detail }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {

          id: 1,
          name: ' ',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp',
          introduce: '',
          detail: "",
          hot: true
    }
  },
  methods: {
    getDetail() {
      this.axios.get('/movieDetail')
      .then(res => {
        // console.log(res.data)
        this.name = res.data.name
        this.introduce = res.data.introduce
        this.detail = res.data.detail
        this.hot = res.data.hot
      })
    }
  },
  created() {
    this.getDetail()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.detail-name {
  text-align: left;
  font-size: 25px;
  color: #494949;
  font-weight: 600;
  padding: 0 0 15px 0;
}
.box {
  .detail-img {
    float: left;
  }
  .detail-info {
    float: left;
    padding-left: 100px;
    width: 200px;
  }
}
.box:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
h2 {
  text-align: left;
}
.detail-indent {
  width: 100%;
  text-align: left;
}
</style>
