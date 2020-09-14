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
        <div class="d-f j-c a-l rib">100%航协认证</div>
        <div class="d-f j-c a-l rib">出行保证</div>
        <div class="d-f j-c a-l w-322">7x24小时服务</div>
      </div>
        <div class="a-top">
        <img class="imga" src="../../../public/image/air.png" alt />国内机票
      </div>
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
.imga {
  width: 27px;
  height: 27px;
  margin-left: 5px;
  margin-right: 5px;
}
.lbox {
  width: 360px;
  height: 350px;
  border: 1px solid #ccc;
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
  border: 1px solid #ccc;
  background: rgb(245,245,245);
 padding: 10px 0;
}

.rib {
  border-right: 1px dotted #ccc;
  width: 322px;
}
.w-322 {
  width: 322px;
}
</style>