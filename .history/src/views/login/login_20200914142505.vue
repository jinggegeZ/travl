<template>
  <div class="loginbox">
    <div class="enterloginbox">
      <div class="top">
        <div
          class="w-50"
          @click="choseitem(item,index)"
          v-for="(item,index) in tablist"
          :key="index"
          :class="activeindex === index ? 'choseitem':''"
        ><div class="d-f j-c a-l">{{item.title}}</div></div>
      </div>
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
.choseitem {
  border-bottom: 2px solid tgb(64, 158, 255);
}
</style>