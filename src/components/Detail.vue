<template>
  <div>
    <div class="detail-name">{{ name }}</div>
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
  name: 'Detail',
  data () {
    return {

          id: 1,
          name: '复仇者联盟3',
          picture: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp',
          introduce: '导演: 安东尼·罗素 / 乔·罗素 ;\n                    编剧: 杰克·科比 / 克里斯托弗·马库斯 / 斯蒂芬·麦克菲利 / 吉姆·斯特林 ;\n                    主演: 小罗伯特·唐尼 / 克里斯·海姆 / 斯沃斯 / 克里斯·埃文斯 / 马克·鲁弗洛 / 乔什·布洛林 / 更多... ;\n                    类型: 动作 / 科幻 / 奇幻 / 冒险 ;\n                    制片国家/地区: 美国 ;\n                    语言: 英语 ;\n                    上映日期: 2018-05-11(中国大陆) ;\n                    cinemas: 150分钟',
          detail: "《复仇者联盟3：无限战争》是漫威电影宇宙10周年的历史性集结，将为影迷们带来史诗版的终极对决。面对灭霸突然发起的闪电袭击，复仇者联盟及其所有超级英雄盟友必须全力以赴，才能阻止他对全宇宙造成毁灭性的打击。",
          hot: true

    }
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
