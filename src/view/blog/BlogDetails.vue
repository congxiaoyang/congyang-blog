<template>
   <div class="container blogDetails-container">
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <div class="public-box">
            <div class="blogInfo-container">
              <div class="blog-title">
                <h3><i class="iconfont title-icon">&#xe6ab;</i>{{blogTitle}}</h3>
                <p><span class="publish-date">{{blogPublishDate}}</span><span class="author">作者：从洋</span><span class="pageView">浏览量：{{blogPageview}}</span></p>
              </div>
              <div class="blog-content">
                {{blogContent}}
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
   </div>
</template>

<script>
    export default {
      name: "BlogDetails",
      data(){
        return{
          blogTitle: '博客标题',
          blogPublishDate: '',
          blogPageview:0,
          blogContent:'',
        }
      },
      mounted:function () {
        var _this = this,
            blogId = this.$route.query.id;
        console.log(blogId);
        this.$http.get('/api/getBlogDetails',{
          params:{id:blogId}
        })
          .then((res) =>{
            var status = res.data.status,
                data = res.data.data[0],
                msg = res.data.msg;
            if(status == 'success'){
              _this.blogTitle = data.title;
              _this.blogPublishDate = data.publish_date;
              _this.blogPageview = data.pageView;
              _this.blogContent = data.content;
            }
          })
      }
    }
</script>

<style scoped lang="scss">
  .blog-title{
    border-bottom: 1px solid #DCDFE6;
    padding-bottom: 20px;
    i.title-icon{
      color: #ca0c16;
      font-size: 30px;
      margin-right: 10px;
      margin-top: -10px;
    }
    p{
      margin-top: 30px;
      span{
        margin-right: 24px;
        color: #909399;
      }
    }
  }
  .blog-content{
    padding: 30px 0;
  }
</style>
