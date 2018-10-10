<template>
  <div class="container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="22" :md="22" :sm="22" :lg="22">
        <div class="blogList-container">
          <!--<div class="search-container">-->
            <!--<input type="text">-->
          <!--</div>-->
          <div class="blog-container">
            <div v-for="blog in blogList" class="item public-box">
              <router-link target="_blank" :to="{path:'/blog/details',query:{id:blog.id}}" class="title">{{blog.title}}</router-link>
              <div class="content">{{blog.abstract}}</div>
              <div class="foo clearfix">
                <div class="fl">
                  <router-link target="_blank" class="goDetailsBtn" :to="{path:'/blog/details',query:{id:blog.id}}">
                    看详情
                  </router-link>
                </div>
                <div class="fr">
                  <P class="date">{{blog.publish_date}}</P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "BlogList",
      data(){
        return{
          blogList:''
        }
      },
      mounted:function () {
        var _this = this;
        this.$http.get('/api/getBlogs',{
          params:{
            page:1,
            size:10,
            date:'',
            search:''
          }
        })
          .then((res) => {
            var status = res.data.status,
                data = res.data.data,
                msg = res.data.msg;

            if(status == 'error'){
              _this.$message.error(msg);
            }else{
              _this.blogList = data;
            }
          })
      }
    }
</script>

<style scoped lang="scss">

</style>
