<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="home-section1">
      <p>小睡神器——易休</p>
      <el-button class="button-buy" type="primary">现在购买</el-button>
    </div>
    <div class="home-section2">
      <p>观看视频</p>
    </div>
    <div class="home-section3">
      <p>放松，只要19分钟</p>
      <div class="cube-array">
        <div class="cube">
          <img src="../assets/Brain sensing.png"></img>
          <p>脑电监测</p>
        </div>
        <div class="cube">
          <img src="../assets/Relaxing music.png"></img>
          <p>音乐助眠</p>
        </div>
        <div class="cube">
          <img src="../assets/Peaceful .png"></img>
          <p>营造环境</p>
        </div>
        <div class="cube">
          <img src="../assets/alarm-clock.png"></img>
          <p>智能唤醒</p>
        </div>
      </div>
    </div>
    <div class="home-section4">
      <div class="cube-array">
        <div class="cube1">
          <img src="../assets/Brain sensing.png"></img>
        </div>
        <div class="cube2">
          <img src="../assets/Relaxing music.png"></img>
        </div>
        <div class="cube3">
          <img src="../assets/Peaceful .png"></img>
        </div>
      </div>
    </div>
    <div class="home-section5">
      <div class="cube-array">
        <div class="cube1">
          <p>易休产品与观众“亲密接触”第五届上交会开幕</p>
          <img src="../assets/Brain sensing.png"></img>
        </div>
        <div class="cube2">
          <p>回车科技用脑电技术让生活更精彩 进入寻常百姓家</p>
          <img src="../assets/Relaxing music.png"></img>
        </div>
        <div class="cube3">
          <p>回车科技的易休只能眼罩 破而后立 对角”新痛点”</p>
          <img src="../assets/Peaceful .png"></img>
        </div>
      </div>
    </div>
    <div class="home-section6">
      <p>易休一刻钟，活力一整天</p>
      <el-button type="primary">了解更多</el-button>
    </div>
    <footer-enter></footer-enter>
  </div>
</template>

<script>

import footerEnter from './Footer.vue';
import navBar from './NavBar.vue';

export default {
    name: 'Home',
    components: {
        footerEnter,
        navBar
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
