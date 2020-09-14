<template>
  <div class="topbox">
    <div class="topbox1">
      <div class="d-f a-l">
        <div>
          <img class="img" src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </div>
        <div  @click="choseitem(item,index)" class="d-f a-l" v-for="(item,index) in arr" :key="index"  :class="activeindex === index ? 'choseitem':''">
          <div class="m-r-10">{{item.name}}</div>
        </div>
      </div>
      <div>登录/注册</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  arr: object[];
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
       activeindex: 0,
    });
    //选择item
    const choseitem = (item: Item, index: number) => {
      data.activeindex = index;
    
    };
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.topbox {
  width: 100%;
  display: flex;
  justify-content: center;
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
    background: skyblue;
    color: white;
}
</style>