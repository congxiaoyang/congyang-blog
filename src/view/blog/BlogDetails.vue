<template>
  <div class="container blogDetails-container">
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <div class="public-box">
          <div class="blogInfo-container">
            <div class="blog-title">
              <h3><i class="iconfont title-icon">&#xe6ab;</i>{{blogTitle}}</h3>
              <p><span class="publish-date">{{blogPublishDate}}</span><span class="author">作者：从洋</span><span
                class="pageView">浏览量：{{blogPageview}}</span></p>
            </div>
              <!--使用v-html输出纯HTML-->
            <div class="markdown-body" v-html="blogContent"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  // 引入highlight.js来将代码块高亮
  // 因为文件夹名最好不要有. 所以叫highlightjs，其实它们是一样的，只不过highlightjs的版本略低
  // highlight.js模块的版本是9.9.0
  // highlightjs模块的版本是9.8.0

  // 引入marked，用来将Markdown转换成HTML
  import marked from 'marked';
  // 配置marked
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    // 配置高亮
    highlight: function (code, lang, callback) {
      return require('highlight.js').highlightAuto(code).value;   // 这里highlightjs会自动给代码增加类
    }
  });

  export default {
    name: "BlogDetails",
    data() {
      return {
        blogTitle: '博客标题',
        blogPublishDate: '',
        blogPageview: 0,
        blogContent: '',
      }
    },
    mounted: function () {
      var _this = this,
        blogId = this.$route.query.id;
      this.$http.get('/api/getBlogDetails', {
        params: {id: blogId}
      })
        .then((res) => {
          var status = res.data.status,
            data = res.data.data[0],
            msg = res.data.msg;
          if (status == 'success') {
            var mdData = data.content;
            mdData = marked(mdData);
            _this.blogTitle = data.title;
            _this.blogPublishDate = data.publish_date;
            _this.blogPageview = data.pageView;
            _this.blogContent = mdData;
          }
        })
    }
  }
</script>

<style scoped lang="scss">
  .blog-title {
    border-bottom: 1px solid #DCDFE6;
    padding-bottom: 20px;
    i.title-icon {
      color: #ca0c16;
      font-size: 30px;
      margin-right: 10px;
      margin-top: -10px;
    }
    p {
      margin-top: 30px;
      span {
        margin-right: 24px;
        color: #909399;
      }
    }
  }

  .blog-content {
    padding: 30px 0;
  }
</style>
