<template>
  <div class="home-container container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="6" :lg="6">
        <Aside></Aside>
      </el-col>
      <el-col :xs="24" :sm="24" :md="18" :lg="18">
        <div class="content">
          <div class="blog-container">
            <div v-for="blog in blogs" class="item public-box">
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
        blogs: ''
      }
    },
    mounted:function(){  // 测试，
      var _this = this;
      this.$http.get(process.env.API_HOST+'getBlogs',{
        params: {page: 1,size:10,date:'',search:''}
      })
        .then((res) =>{
          var status = res.data.status,
            data = res.data.data,
            msg = res.data.msg;

          if(status == 'error'){
            this.$message.error(msg);
          }else{
            _this.blogs = data;
          }
      })
    }
  }
</script>

<style lang="scss">
</style>
