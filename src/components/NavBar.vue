<template>
  <div class="nav-bar">
    <img class="logo" src="../assets/en/logo.png"></img>
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <span @mouseenter="leave" class="hack"></span>
      <el-menu-item @mouseenter.native="toggleShow" class="my-menu-item" index="1">产品</el-menu-item>
      <el-menu-item @mouseenter.native="leave" @click="toRoute('appIntro')" class="my-menu-item" index="2">App</el-menu-item>
      <el-menu-item @mouseenter.native="leave" @click="toRoute('tech')" class="my-menu-item" index="3">技术</el-menu-item>
      <el-menu-item class="my-menu-item" @click="toRoute('snap')" index="4">小睡概念</el-menu-item>
      <el-menu-item class="my-menu-item" @click="toRoute('news')" index="5">新闻动态</el-menu-item>
      <el-menu-item class="my-menu-item" @click="toRoute('help')" index="6">帮助</el-menu-item>
      <div class="iconArr">
        <img src="../assets/buyIcon.png"></img>
        <img src="../assets/buyIcon.png"></img>
      </div>
      <el-button type="primary" class="buyBtn" ><img class="buyIcon" src="../assets/buyIcon.png"></img><p>购买</p></el-button>
    </el-menu>

    <transition name="fade">
      <div v-if="isShow" @mouseenter="toggleShow" @mouseleave="leave" class="choose-product">
          <div class="product" @click="toRoute('product1')">
            <img src="../assets/buyIcon.png"></img>
            <p>易休iPhone专享版</p>
          </div>
          <div class="product" @click="toRoute('product2')">
            <img src="../assets/buyIcon.png"></img>
            <p>易休-light系列</p>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import router from '../router/index.js';

export default {
    name: 'navBar',
    components: {
    },
    data() {
        return {
            isShow: false,
            msg: 'Welcome to Your Vue.js App'
        };
    },
    methods: {
        toggleShow: function() {
            this.isShow = true;
        },
        leave() {
            this.isShow = false;
        },
        toRoute(name) {
            router.push(name);
        },
        handleSelect() {

        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

</style>
