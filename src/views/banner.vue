<template>
  <div>
    <el-row>
      <router-link to="/alllist"><el-button type="primary" plain>All List</el-button></router-link>
    </el-row>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in list" :key="item.id">
        <router-link :to="'/detail/'+item.id">
          <img :src='item.picture' alt="">
          <p><span><img v-if="item.hot" src="../assets/hot.png">{{ item.name }}</span></p>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'banner',
  data () {
    return {
      list: []
    }
  },
  methods: {
    getMovie () {
      axios.get('/movieHot')
      .then(res => {
        if (res.data.status === 200) {
          // console.log(res.data.result.list)
          this.list = res.data.result.list
        } else {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'error'
          })
        }
      })
    }
  },
  created() {
    this.getMovie()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.el-button {
  margin-bottom: 20px;
}
p {
  margin-top: 0;
  font-size: 16px;
  color: #000;
  img {
    width: 16px;
  }
}
</style>
