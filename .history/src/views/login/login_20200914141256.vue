<template>
  <div class="loginbox">
    <div class="enterloginbox">
      <a-tabs @change="callback">
      <a-tab-pane key="1" tab="Tab 1">
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
   key:string
}
interface con {
   key:string
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
         key:"登录"
      }, {
         key:'注册'
      }],
      contentList:[{key:"content1"},{key:'content2'}]
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