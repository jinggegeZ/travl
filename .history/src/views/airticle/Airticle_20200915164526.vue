<template>
  <div class="article">
    <div class="article_a">
      <!-- 左边 -->
      <div class="article_left">
        <!-- 页面位置 -->
        <div>
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>
              <a href>旅游攻略</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>攻略详情</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <!-- 文章 -->
        <div>
          <!-- 标题 -->
          <h1 class="art">远东行：用好奇心打量这座城</h1>
          <!-- 阅读数 -->
          <div class="art_a">
            <span>攻略：2019-05-22 12:59</span>
            <span>阅读：2079</span>
          </div>
          <!-- 内容 -->
          <div class="art_b">文章内容</div>
        </div>
        <!-- 分享 -->
        <div class="art_c">
          <div class="art_d">
            <img src="../../../public/image/pl.png" alt />
            <div>评论</div>
          </div>
          <div>
            <img src="../../../public/image/share.png" alt />
            <div>分享</div>
          </div>
        </div>
        <!-- 评论 -->
        <div>
          <a-textarea
            v-model:value="value"
            placeholder="说点什么吧。。。"
            :auto-size="{ minRows: 2, maxRows: 5 }"
          />
        </div>
        <!-- 图片上传 -->
        <div class="art_e">

        </div>
        <!-- 评论列表 -->
        <div class="pl"></div>
      </div>
      <!-- 右边 -->
      <div class="article_right">
        <h4 class="title">相关攻略</h4>
        <div class="art_list">
          <div class="art_list_a">
            <img
              class="art_list_b hvr-grow"
              src="http://p1-q.mafengwo.net/s11/M00/B4/92/wKgBEFt6ZqaAJeK7AAbj58wpNlY06.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
              alt
            />
          </div>
          <div class="art_list_c">
            <div class="art_list_d">小蛮腰广州塔，怎么玩才不遗憾？</div>
            <div class="art_list_e">
              <span>2019-05-22 1:16</span>
              <span>阅读 696</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext,onMounted } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.article {
  display: flex;
  justify-content: center;
}
.article_a {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.article_left {
  width: 700px;
}
.art {
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}
.art_a {
  color: #999;
  padding-bottom: 20px;
  text-align: right;
  font-size: 14px;
}
.art_a span {
  padding-left: 20px;
}
.art_b {
  min-height: 200px;
}
.art_c {
  padding: 50px 0 30px;
  display: flex;
  justify-content: center;
}
.art_c img {
  width: 40px;
  font-size: 15px;
  color: #999;
  text-align: center;
}
.art_d {
  margin-right: 40px;
}
.art_e{
  margin-top: 20px;
  min-height: 60px;
  background-color: pink;
}
.pl{
  border: 1px solid #ddd;
}



.article_right {
  width: 280px;
}
.title {
  font-weight: 400;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  color: #666666;
}
.art_list {
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
.art_list_a {
  width: 100px;
  height: 80px;
  overflow: hidden;
}
.art_list_b {
  width: 100px;
  height: 80px;
  object-fit: cover;
}
.art_list_c {
  position: relative;
  height: 80px;
  width: 60%;
}
.art_list_d {
  font-size: 14px;
}
.art_list_e {
  font-size: 12px;
  color: #999;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.art_list_e span {
  padding-right: 5px;
}
.art_list:hover .hvr-grow {
  transform: scale(1.2);
}
.art_list:hover .art_list_d {
  color: #e0620d;
}
</style>