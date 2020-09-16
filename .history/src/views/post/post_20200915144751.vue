<template>
  <div class="post">
    <div class="post_a">
      <!-- 左边 -->
      <div class="post_left">
        <!-- 推荐 -->
        <div class="recom">
          <div class="recom_a" v-for="(item,index) in hotlist" :key="index">
            <div class="recom_aa" >
              <div class="recom_aa-font">{{item.type}}</div>
              <div class="goright"></div>
            </div>
            <!-- 定位 -->
            <div class="recom_b" >
              <div class="recom_c" v-for="(item1,index1) in item.children" :key="index1">
                <span class="recom_d">{{index1+1}}</span>
                <span class="recom_e">{{item1.city}}</span>
                <span class="recom_f">{{item1.desc}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 推荐城市 -->
        <div class="recom_city">
          <h4 class="recom_city_a">推荐城市</h4>
          <div class="recom_city_b">
            <img
              class="recom_city_c hvr-grow"
              src="http://157.122.54.189:9093/images/pic_sea.jpeg"
              alt
            />
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="post_right">
        <!-- 搜索框 -->
        <div>
          <div class="sou">
            <input class="sou_input" type="text" placeholder="请输入想去的地方 比如“广州”" v-model="city" />
            <img class="sou_icon" src="../../../public/image/search.png" alt />
          </div>
          <!-- 推荐 -->
          <div class="sou_a">
            推荐：
            <div @click="chose($event)" id="广州">广州</div>
            <div @click="chose($event)" id="上海">上海</div>
            <div @click="chose($event)" id="北京">北京</div>
          </div>
        </div>
        <!-- 推荐攻略-->
        <div class="tui">
          <div class="tui_a">推荐攻略</div>
          <div>
            <a-button type="primary">
              <template v-slot:icon>
                <HighlightOutlined />
              </template>写游记
            </a-button>
          </div>
        </div>
        <!-- 推荐攻略3张图片-->
       <div v-for="(item,index) in totallist" :key="index">
          <div class="jian" v-if="item.images.length > 2">
          <div class="jian_a sl">{{item.title}}</div>
          <div class="jian_b">
            {{item.summary}}
          </div>
          <div class="jian_c">
            <div class="jian_dd" v-for="(item1,index1) in item.images.slice(0,3)" :key="index1">
              <img
                class="jian_d hvr-grow"
                :src="item1"
                alt
              />
            </div>
          </div>
          <div class="jian_e">
            <div class="jian_f">
              <span class="m-r-10">{{item.cityName}}</span>
              <span>by<img class="jian-img" :src="`http://157.122.54.189:9095${item.account.defaultAvatar}`" alt="">{{item.account.nickname}}</span>
              <span class="m-l-10" v-if="item.like === null">0</span>
              <span class="m-l-10" v-else>{{item.like}}</span>
            </div>
            <div class="jian_g">{{item.watch}}赞</div>
          </div>
        </div>
        <!-- 推荐攻略1张图片-->
        <div class="tj" v-if="item.images.length < 2">
          <!--图片-->
          <div class="tj_a" v-for="(item2,index2) in item.images" :key="index2">
            <img
              class="tj_b hvr-grow"
              :src="item2"
              alt
            />
          </div>
          <!--内容-->
          <div class="tj_c" >
            <div class="jian_a sl">{{item.title}}</div>
            <div class="jian_b">
          {{item.summary}}
            </div>
             <div class="jian_e">
            <div class="jian_f">
              <span class="m-r-10">{{item.cityName}}</span>
              <span>by<img class="jian-img" :src="`http://157.122.54.189:9095${item.account.defaultAvatar}`" alt="">{{item.account.nickname}}</span>
              <span class="m-l-10" v-if="item.like === null">0</span>
              <span class="m-l-10" v-else>{{item.like}}</span>
            </div>
            <div class="jian_g">{{item.watch}}赞</div>
          </div>
          </div>
        </div>
       </div>
        <!-- 分页-->
        <div class="fenye">
          <a-pagination size="small" :total="total" show-size-changer show-quick-jumper />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
import { useRoute } from "vue-router";
import api from "@/http/api";
import { Res, ResItem } from "@/types";
interface t {
  title:string
}
interface total {
  data:t[]
}

interface Data {
  hotlist:ResItem[]
  totallist:total[]
  city:string,
  total:number
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
     hotlist:[],
     totallist:[],
      city:'',
      total:0
    });
    const route = useRoute();
    const getPost = ()=> {
      api.getposts({city:data.city}).then((res:any) => {
          data.totallist = res.data
          data.total = res.total
          console.log(res);
        }).catch()
    }
    const chose = (e:any) => {
      data.city = e.target.innerHTML
      console.log(e)
    }
    //获取传递过来的值
    onMounted(() => {
      if (route.query.msgs) {
        data.city = route.query.msgs! as string;
        console.log(data.city);
        api.getcity().then((res:Res)=> {
         data.hotlist = res.data
        }).catch()
        getPost()
      }
    });

    return {
      ...toRefs(data),
      getPost,
      chose
    };
  },
});
</script>

<style scoped lang='scss'>
.post {
  display: flex;
  justify-content: center;
}
.post_a {
  width: 1000px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}
.post_left {
  width: 260px;
}
.goright{
  width: 10px;
height: 10px;
border-top: 1px solid #ddd;
border-right: 1px solid #ddd;
transform: rotate(45deg);
}
.recom{
    border: 1px solid #ddd;
    border-right: none;
    border-bottom: none;
    box-shadow: 0 0 1px #f5f5f5;
}
.recom_a{
    height: 40px;
    position: relative;
}
.recom_aa{
    width: 100%;
   line-height: 40px;
   height: 40px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    background-color: white;
}
.recom_aa:hover{
  color: #e0620d;
   border-right:none;
}
.recom_a:hover .goright{
  border-color: #e0620d;
}
.recom_a:hover .recom_b{
  visibility: visible;
}
.recom_aa-font {
  font-size: 14px;
  font-weight: 600;
}
.recom_b{
    position: absolute;
    left: 258px;
    top: -1px;
    width: 350px;
    padding: 10px 20px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #ddd;
    visibility: hidden;
    z-index: 1;
}
.recom_c{
  font-size: 14px;
}
.recom_c span{
  padding-right: 10px;
}
.recom_d{
  color: #e0620d;
    font-size: 24px;
    font-style: italic;
}
.recom_e{
  color: #e0620d;
}
.recom_f{
  color: #999;
}
.recom_city{
  margin-top: 20px;
}
.recom_city_a{
      font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    color: #666666;
}
.recom_city_b{
  overflow: hidden;
    width: 260px;
  height: 173px;
}
.recom_city_c{
    width: 260px;
  height: 173px;
  object-fit: cover;
}
.post_right {
  width: 700px;
}
.sou {
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  border: 3px solid #e0620d;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sou_input {
  width: 90%;
  height: 90%;
  border: none;
  margin-left: 20px;
  font-size: 14px;
}
.sou_icon {
  width: 25px;
  margin-right: 20px;
}
.sou_a {
  display: flex;
  font-size: 12px;
  color: #666666;
  line-height: 26px;
}
.sou_a div {
  margin-left: 10px;
}
.sou_a div:hover {
  color: #e0620d;
}
.tui {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  height: 60px;
}
.tui_a {
  height: 100%;
  line-height: 60px;
  border-bottom: 2px solid #e0620d;
  box-sizing: border-box;
}
.jian {
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.jian:hover .hvr-grow{
    transform: scale(1.2);
}
.jian:hover .jian_a{
  color: #e0620d;
}
.jian_a {
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 18px;
}
.jian_b {
  margin-bottom: 15px;
  line-height: 1.5;
  font-size: 14px;
  height: 63px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.jian_c {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}
.jian_dd {
  width: 220px;
  height: 150px;
  overflow: hidden;
}
.jian_d {
  width: 220px;
  height: 150px;
  object-fit: cover;
}
.jian_e {
  display: flex;
  justify-content: space-between;
}
.jian_f {
  font-size: 12px;
  color: #999;
}
.jian_g {
  color: #e0620d;
  font-size: 16px;
}
.tj {
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}
.tj_a {
  width: 220px;
  height: 150px;
  overflow: hidden;
}
.tj_b {
  height: 150px;
  width: 220px;
}
.tj:hover .hvr-grow{
    transform: scale(1.2);
}
.tj:hover .jian_a{
  color: #e0620d;
}
.tj_c{
  width: 66%;
}
.fenye{
  margin-top: 20px;
  text-align: center;
}
.jian-img {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
