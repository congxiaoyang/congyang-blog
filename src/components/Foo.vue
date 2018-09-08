<template>
  <footer class="footer">
    <p class="tc">©️congayng copyright</p>
  </footer>
</template>

<script>
  export default {
    name: "Foo"
  }
</script>

<style scoped lang="scss">
  .footer{
    height: 50px;
    border-top: solid 1px rgba(160, 160, 160, 0.3);
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    p{
      color: #999;
      line-height: 50px;
    }
  }
</style>
