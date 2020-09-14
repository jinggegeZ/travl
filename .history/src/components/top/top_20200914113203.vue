<template>
  <div class="topbox">
    <div class="topbox1">
      <div class="d-f a-l">
        <div>
          <img class="img" src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </div>
        <div
          @click="choseitem(item,index)"
          class="d-f a-l hvr-underline-from-left"
          v-for="(item,index) in arr"
          :key="index"
          :class="activeindex === index ? 'choseitem':''"
        >
          <div class="item">{{item.name}}</div>
        </div>
      </div>
      <div class="login">登录/注册</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Item {
  name: string;
}
interface Data {
  arr: Item[];
  activeindex: number | string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      //arr数组
      arr: [
        {
          name: "首页",
        },
        {
          name: "旅游攻略",
        },
        {
          name: "酒店",
        },
        {
          name: "国内机票",
        },
      ],
      activeindex: '',
    });
    //选择item
    const choseitem = (item: Item, index: number) => {
      data.activeindex = index;
    };
    return {
      ...toRefs(data),
      choseitem,
    };
  },
});
</script>

<style scoped lang='scss'>
.topbox {
  width: 100%;
  display: flex;
  justify-content: center;
    border-bottom: 1px solid #ddd;
box-shadow: 0 3px 0 #f5f5f5;
}
.topbox1 {
  width: 1120px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img {
  width: 156px;
}
.choseitem {
  background: rgb(64, 158, 255);
  color: white;
}
.item {
  padding: 0 30px;
  height: 60px;
  line-height: 60px;
}
.login:hover {
   color:rgb(64, 158, 255);
}
</style>