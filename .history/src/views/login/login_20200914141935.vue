<template>
  <div class="loginbox">
    <div class="enterloginbox">
    <div class="top">
      <div class="d-f j-c a-l" v-for="(item,index) in tablist"
          :key="index"
          :class="activeindex === index ? 'choseitem':''">{{item.title}}</div>
    </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Tabs } from "ant-design-vue";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";

interface tabs {
   title:string
}
interface con {
   title:string
}
interface Data {
  tablist: tabs[];
  contentList:con[]
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      tablist: [{
         title:"登录"
      }, {
         title:'注册'
      }],
      contentList:[{title:"content1"},{title:'content2'}]
    });
   const onTabChange = (key:tabs) => {
      console.log(key);
      
   }
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.top {
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
</style>