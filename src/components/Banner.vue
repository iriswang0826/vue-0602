<template>
  <div>
    <el-row>
      <router-link to="/alllist"><el-button type="primary" plain>All List</el-button></router-link>
    </el-row>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in items">
        <router-link :to="'/detail/'+item.id">
          <img :src='item.picture' alt="">
          <p>{{ item.name }}</p>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props:{
    item: Object
  },
  data () {
    return {
      items: [
        {
          id: 1,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp'
        },
        {
          id: 2,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp'
        },
        {
          id: 3,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp'
        },
        {
          id: 4,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp'
        }
      ]
    }
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
}
</style>
