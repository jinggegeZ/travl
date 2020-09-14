<template>
  <div class="loginbox">
    <div class="enterloginbox">
      
    </div>
  </div>
</template>

<script lang='ts'>
import { Tabs } from "ant-design-vue";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";

interface tabs {
  title: string;
}
interface con {
  title: string;
}
interface Data {
  tablist: tabs[];
  contentList: con[];
  activeindex: number | string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      tablist: [
        {
          title: "登录",
        },
        {
          title: "注册",
        },
      ],
      activeindex: "",
      contentList: [{ title: "content1" }, { title: "content2" }],
    });
    //选择item
    const choseitem = (item: tabs, index: number) => {
      data.activeindex = index;
    };
    return {
      ...toRefs(data),
      choseitem
    };
  },
});
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.choseitem {
  border-bottom: 2px solid tgb(64, 158, 255);
}
</style>