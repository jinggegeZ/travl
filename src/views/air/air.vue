<template>
  <div class="d-f j-c a-l w-1">
    <div class="airbox">
      <div class="a-top">
        <img class="imga" src="../../../public/image/air.png" alt />国内机票
      </div>
      <div class="d-f w-1 j-c-sb">
        <div class="lbox"></div>
        <div class="rbox">
          <img class="rboximg" src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt />
        </div>
      </div>
      <div class="d-f w-1 br2">
        <div class="d-f j-c a-l rib">
          <img class="imga" src="../../../public/image/huizhang.png" alt />100%航协认证
        </div>
        <div class="d-f j-c a-l rib">
          <img class="imga" src="../../../public/image/renzheng.png" alt />出行保证
        </div>
        <div class="d-f j-c a-l w-322">
          <img class="imga" src="../../../public/image/phone.png" alt />7x24小时服务
        </div>
      </div>
      <div class="a-bot">
        <img class="imga" src="../../../public/image/otherplane.png" alt />特价机票
      </div>
      <div class="imgbot">
        <div class="posi" v-for="(item,index) in list" :key="index">
          <img class="imgpic" :src="item.cover" alt />
          <div class="botbox">
            <div class="m-l-10">{{item.departCity}}-{{item.destCity}}</div>
            <div class="m-r-10">¥{{item.price}}</div>
          </div>
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
import { Res, ResItem } from "@/types";
import api from "@/http/api";
interface Data {
  list: ResItem[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      list: [],
    });
    const route = useRoute();
    //获取传递list
    onMounted(() => {
      api
        .getsale()
        .then((res: Res) => {
          data.list = res.data;
        })
        .catch((err: Error) => {
          console.log(err);
        });
    });

    return {
      ...toRefs(data),
      onMounted,
    };
  },
});
</script>

<style scoped lang='scss'>
.airbox {
  width: 1000px;
  min-height: 700px;
}
.a-top {
  width: 100%;
  height: 27px;
  margin: 15px 0;
  font-size: 20px;
  color: orange;
}
.a-bot {
  width: 100%;
  height: 27px;
  margin: 15px 0;
  font-size: 20px;
  color: #409eff;
}
.imga {
  width: 24px;
  height: 24px;
  margin-left: 5px;
  margin-right: 5px;
}
.lbox {
  width: 360px;
  height: 350px;
  border: 1px solid #ddd;
}
.rbox {
  width: 620px;
  height: 350px;
}
.rboximg {
  width: 620px;
  height: 350px;
}
.br2 {
  margin: 15px 0;
  border: 1px solid #ddd;
  background: rgb(245, 245, 245);
  padding: 10px 0;
}

.rib {
  border-right: 1px dotted #ddd;
  width: 322px;
}
.w-322 {
  width: 322px;
}
.imgbot {
  width: 100%;
  margin-bottom: 50px;
  padding: 20px;
  display: flex;
  
  border: 1px solid #ddd;
}
.imgpic {
  width: 225px;
  height: 150px;
  
}
.posi {
  position: relative; 
  margin-right: 15px;
}
.botbox {
  width: 225px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
  color: white;
}
</style>