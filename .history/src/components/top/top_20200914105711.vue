<template>
  <div class="topbox">
    <div class="topbox1">
      <div class="d-f a-l">
        <div>
          <img class="img" src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </div>
        <div>
          <a-tabs @change="callback">
            <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
          </a-tabs>
        </div>
      </div>
      <div>登录/注册</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
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
   const callback = (key:string) => {s
      console.log(key);
   }
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
</style>