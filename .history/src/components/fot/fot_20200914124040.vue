<template>
 <div class="d-f j-c w-100">
    <div class="fotbox">
     <div class="bottom">
    <div class="bottom_a">
      <!--  -->
      <div class="bottom_b">
        <div class="bottom_c">
          <div class="bottom_d">闲云旅游旅游网</div>
          <div class="bottom_e">上亿旅行者共同打造的"旅行神器"</div>
          <div class="bottom_e"><span>60,000</span>多个全球旅游目的地</div>
          <div class="bottom_e"><span>60,000</span>个细分目的地新玩法</div>
          <div class="bottom_e"><span>760,000,000</span>次攻略下载</div>
          <div class="bottom_e"><span>38,000</span> 家旅游产品供应商</div>
        </div>
        <div class="bottom_c">
          <div class="bottom_d">关于我们</div>
          <div class="bottom_e">隐私政策 商标声明</div>
          <div class="bottom_e">服务协议 游记协议</div>
          <div class="bottom_e">商城平台服务协议</div>
          <div class="bottom_e">网络信息侵权通知指引</div>
          <div class="bottom_e">闲云旅游旅游网服务监督员</div>
          <div class="bottom_e">网站地图加入闲云旅游</div>
        </div>
        <div class="bottom_c">
          <div class="bottom_d">旅行服务</div>
          <div class="bottom_e">旅游攻略 酒店预订</div>
          <div class="bottom_e">旅游特价 国际租车</div>
          <div class="bottom_e">旅游问答 旅游保险</div>
          <div class="bottom_e">旅游指南 订火车票</div>
          <div class="bottom_e">旅游资讯 APP下载</div>
        </div>
        <div class="bottom_c botom_f">
          <div><img src="http://157.122.54.189:9093/images/1556522965.png" alt=""></div>
          <div class="bottom_g">关注我们</div>
        </div>
      </div>
      <!-- 备案 -->
      <div></div>
    </div>
 </div>
    </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.fotbox {
   width: 1000px;
   color: white;
   height: 300px;
}
.bottom{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 330px;
  background: #333;
  color: #ccc;
}
.bottom_a{
  width: 1000px;
  padding-top: 30px;
}
.bottom_b{
  display: flex;
  justify-content:space-around;
}
.bottom_c{
  width: 25%;
}
.bottom_d{
    margin-bottom: 10px;
}
.bottom_e{
    line-height: 1.8;
    font-size: 14px;
}
.bottom_e{
  font-size: 12px;
}
.bottom_e span{
      color: orange;
      padding-right: 5px;
}
.botom_f div{
  text-align: center;
}
.botom_f img{
  width: 140px;
    height: 140px;
}
.bottom_g{
  font-size: 14px;
  margin-top: 10px;
}
</style>