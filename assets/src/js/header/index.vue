<template>
  <div class="header">
    <ul class="header-nav">
      <router-link tag="li" class="header-nav-item trans-dura-4" active-class="current" :to="`/${category}/${categoryCurrentSite[category]}`" v-for='category in categories' :key="category">
          {{category}}
      </router-link>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      categories: function () {
        return this.$store.getters.categories
      },
      ...mapState({
        categoryCurrentSite: state => state.ui.categoryCurrentSite
      })
    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/css/variable.scss";
  .header {
    position: fixed;
    display: flex;
    width: 100%;
    background-color: white;
    // height: $headerHeight;
    padding-top: 20px;
    flex-shrink: 0;
    border-bottom: 1px solid $activeColor;
    height: 50px;
    z-index: 1;
  }

  .header-nav {
    display: flex;
    max-width: 1200px;
    height: 30px;
    margin: 0 auto;
    font-weight: bold;
    background: transparent;
    text-align: center;
  }

  .header-nav-item {
    display: inline-block;
    width: 80px;
    line-height: 28px;
    font-size: 15px;
    font-weight: bold;
    border-bottom: 4px solid transparent;
    &:hover {
      color: $activeColor;
      cursor: pointer;
    }
  }

  .current {
    color: $activeColor;
    border-bottom-color: $activeColor;
  }

  .menu-item {
    font-size: 17px;
    // color : #333;
  }

  .is-active {
    border-bottom: 5px solid #20a0ff;
  }

</style>
