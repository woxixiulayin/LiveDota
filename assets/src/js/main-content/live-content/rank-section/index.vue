<template>
  <section class="rank-section">
    {{currentCategory}}
    <ul class="rank-list">
      <li class="rank-item">
        123
      </li>
    </ul>
  </section>
</template>
<script>
  import store from 'js/store'

  export default {
    props: ['currentCategory'],
    data: () => {
      const globalState = store.state

      return {
        categoryList: globalState.categoryList
      }
    }
  }

</script>

<style lang="scss">
  @import "~@/css/variable.scss";
  .rank-section {
    position: fixed;
    background-color: white;
    z-index: 1;
    height: 100%;
    top: 50px;
    right: 0;
    width: 350px;
    // width: $rightSideWidth;
    border-left: 1px solid $activeColor;
    flex-basis: $rightSideWidth;
    flex-grow: 0;
    flex-shrink: 0;
  }

</style>
