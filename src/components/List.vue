<template>
  <div>
    <h3>全部列表</h3>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in lists">
        <router-link :to="'/detail/'+item.id">
          <div class="list-img">
            <img :src='item.picture' alt="">
          </div>
          <p><span><img v-if="item.hot" src="../assets/hot.png">{{ item.name }}</span></p>
        </router-link>
      </el-col>
    </el-row>
    <div class="block">
      <el-pagination
        layout="total,prev, pager, next"
        :total="total"
        :current-page="currentPage"
        :page-size="pageSize"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      lists: [],
      currentPage: 1,
      total: 2,
      pageSize: 1
    }
  },
  methods: {
    getMovieList () {
      this.axios.get('/movieList')
      .then(res => {
        // console.log(res.data.result.content)
        this.lists = res.data.result.content
        this.currentPage = res.data.result.pageNum //当前页数
        this.total = res.data.result.total  //总条目数
        this.pageSize = res.data.result.pagesize //每页显示条目数
      })
    }
  },
  created() {
    this.getMovieList()
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
}
.block {
  margin-top: 30px;
}
</style>
