<template>
  <aside>
    <div class="intro-container">
      <div class="avatar">
        <img src="../../static/images/avatar.jpeg" alt="">
      </div>
      <div class="name">
        <p>{{userName}}</p>
      </div>
      <div class="intro">{{userIntro}}</div>
    </div>
  </aside>
</template>

<script>
    export default {
      name: "Aside",
      data(){
        return{
          userName:'无名氏',
          userIntro:'她／他并没有留下任何介绍 （摊手）'
        }
      },
      mounted:function(){  // 获取到用户信息，展示在aside中
        this.$http.get('/api/getUsersInfo',{
          params: {id: 0}
        })
          .then((res) =>{
            var data = res.data;
            // this.$message.success(res.data[0].intro);
            this.userName = data[0].name;
            this.userIntro = data[0].intro;

          })
      }
    }
</script>

<style scoped lang="scss">
  aside{
    padding: 10px;
    .avatar{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .name{
      font-size: 2em;
      margin-top: 25px;
    }
    .intro{
      margin-top: 24px;
      color: #646464;
      line-height: 1.5em;
    }
  }
</style>
