<template>
  <div class="header">
    <el-menu mode='horizontal' :default-active="`0`" class='header-nav'>
      <router-link :to="`${item}`" v-for='(item, index) in items' :key="index">
        <el-menu-item :index='String(index)' class="menu-item">
          {{item}}
      </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
  import {
    gameCategory
  } from 'js/config'

  export default {
    data: () => {
      return {
        items: Object.keys(gameCategory)
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/css/variable.scss";
  .header {
    display: flex;
    width: 100%;
    // height: $headerHeight;
    padding-top: 20px;
    flex-shrink: 0;
    border-bottom: 2px solid $activeColor;
  }
  
  .header-nav {
    max-width: 1200px;
    margin: 0 auto;
    font-weight: bold;
    background: transparent;
  }
  
  .menu-item {
    font-size: 17px;
    // color : #333;
  }
  
  .is-active {
    border-bottom: 5px solid #20a0ff;
  }

</style>
