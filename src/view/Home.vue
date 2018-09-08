<template>
  <div class="home-container container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="6" :lg="6">
        <Aside></Aside>
      </el-col>
      <el-col :xs="24" :sm="24" :md="18" :lg="18">
        <div class="content">
          <div class="blog-container">
            <div class="item">
              <router-link to="/blogDetails" class="title">Vue搭建个人博客</router-link>
              <div class="content">npm run dev</div>
              <div class="foo clearfix">
                <div class="fl">
                  <router-link class="goDetailsBtn" to="/blogDetails">
                    看详情
                  </router-link>
                </div>
                <div class="fr">
                  <P class="date">2018-08-30 13：34</P>
                </div>
              </div>
            </div>
          </div>
          <div class="article-container">

          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Aside from '@/components/Aside'
  export default {
    name:'Home',
    components:{Aside},
    data (){
      return{

      }
    }
    // mounted:function(){  // 测试，
    //   this.$http.get('/api/getValue',{
    //     params: {id: 0}
    //   })
    //     .then((res) =>{
    //       this.$message.success(res.data.data);
    //   })
    // }
  }
</script>

<style lang="scss">
  .home-container{
    padding: 50px;
    .blog-container{
      .item{
        display: block;
        padding: 30px;
        background-color: #fff;
        border: 1px solid rgba(160, 160, 160, 0.3);
        .title{
          font-size: 22px;
          transition: all .3s;
          -webkit-transition: all .3s;
          -moz-transition: all .3s;
          -ms-transition: all .3s;
          -o-transition: all .3s;
          &:hover{
            color: #c74dc4;
          }
        }
        .content{
          margin-top: 20px;
        }
        .foo{
          margin-top: 30px;
          .goDetailsBtn{
            display: inline-block;
            height: 50px;
            padding: 0 50px;
            border: 1px solid rgba(160, 160, 160, 0.3);
            line-height: 50px;
            font-size: 14px;
            transition: all .3s;
            -webkit-transition: all .3s;
            -moz-transition: all .3s;
            -ms-transition: all .3s;
            -o-transition: all .3s;
            &:hover{
              border-color: #c74dc4;
              color: #c74dc4;
            }
          }
          .date{
            color: #646464;
            font-size: 14px;
            line-height: 50px;
          }
        }
      }
    }
  }
</style>
