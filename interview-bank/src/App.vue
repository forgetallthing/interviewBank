<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

const activeIndex = ref("1");
const activeIndex2 = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <el-container>
    <el-header
      >Header
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">列表</el-menu-item>
        <el-menu-item index="2">Orders</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<style>
body {
  margin: 0;
}

.el-header {
  background-color: #2d9ea7;
  line-height: 60px;
  color: #ffffff;
}
</style>
