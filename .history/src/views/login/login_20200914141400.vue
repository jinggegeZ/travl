<template>
  <div class="loginbox">
    <div class="enterloginbox">
      <a-tabs @change="callback">
      <a-tab-pane key="1" tab="登录">
        Content of Tab Pane 1
      </a-tab-pane>
       <a-tab-pane key="1" tab="注册">
        Content of Tab Pane 1
      </a-tab-pane>
    </a-tabs>
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
</style>