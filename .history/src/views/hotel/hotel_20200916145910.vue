<template>
  <div class="d-f j-c w-1">
    <div class="hotelbox">
      <div class="topbox">
        <a-breadcrumb separator=">">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>酒店</a-breadcrumb-item>
          <a-breadcrumb-item>酒店预订</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="searchbox">
        <div class="citybox"></div>
        <div></div>
        <div></div>
        <div></div>
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
interface Data {
  msgs: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      msgs: "",
    });
    const route = useRoute();
    //获取传递过来的值
    onMounted(() => {
      if (route.query.msgs) {
        data.msgs = route.query.msgs! as string;
        console.log(data.msgs);
      }
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.hotelbox {
  width: 1000px;
}
.topbox {
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.searchbox {
  display: flex;
  width: 100%;
  height: 50px;
  margin: 15px;

}

















</style>