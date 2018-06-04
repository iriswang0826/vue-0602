<template>
  <div>
    <h3>全部列表</h3>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in lists">
        <router-link to="/detail">
          <div class="list-img">
            <img :src='item.picture' alt="">
          </div>
          <p><span><img v-if="item.hot" src="../assets/hot.png">{{ item.name }}</span></p>
        </router-link>
      </el-col>
    </el-row>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      lists: [
        {
          id: 1,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp',
          hot: true
        },
        {
          id: 2,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp',
          hot: true
        },
        {
          id: 3,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp',
          hot: false
        },
        {
          id: 4,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp',
          hot: false
        },
        {
          id: 5,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp',
          hot: true
        },
        {
          id: 6,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp',
          hot: true
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h3 {
  text-align: left;
}
.list-img {
  img {
    width: 100%;
  }
}
p {
  color: #333;
  span {
    img {
      width: 16px;
    }
  }
}
.block {
  margin-top: 30px;
}
</style>
