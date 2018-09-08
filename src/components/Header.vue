<template>

  <header class="header">
    <el-row>
      <el-col class="logo-container" :span="4">
        <div class="tc">
          <router-link class="clearfix inline-block tc" to="/">
            <img src="../../static/images/logo.png" class="logo-img fl" alt="">
          </router-link>
        </div>
      </el-col>
      <el-col :span="20">
        <ul class="nav">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/blog">博客</router-link>
          </li>
          <li>
            <router-link to="/article">随记</router-link>
          </li>
          <li>
            <router-link to="/about">关于我</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>

  </header>

</template>

<script>

</script>

<style scoped lang="scss">

  .header {
    height: 56px;
    background-color: #fff;
    border-bottom: solid 1px rgba(160, 160, 160, 0.3);
    .logo-container {
      border-right: solid 1px rgba(160, 160, 160, 0.3);
      height: 56px;
      .logo-img {
        height: 40px;
        margin-top: 8px;
      }
      .logo-title {
        display: inline-block;
        line-height: 56px;
      }
    }
    .nav{
      height: 56px;
      li{
        float: left;
        height: 100%;
        a{
          color: #666;
          line-height: 56px;
          padding: 0 30px;
          border-right: solid 1px rgba(160, 160, 160, 0.3);
        }
        a.router-link-active{
          color: #c74dc4;
        }
        &:last-of-type{
          a{
            border-right: none;
          }
        }
      }
    }
  }
</style>
