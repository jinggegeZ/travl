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
        <div class="timebox"></div>
        <div class="peobox"></div>
        <div>
          <a-button type="primary">Primary</a-button>
        </div>
      </div>

      <div class="d-f w-1 m-b-15">
        <div class="l-box">
          <div></div>
          <div></div>
        </div>
        <div class="r-box">
          <div id="container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
import { useRoute } from "vue-router";
import api from "@/http/api";
interface Data {
  name: string;
}
export default defineComponent({
  city: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      name: "",
    });
    const getCity = (city: string) => {
      api
        .getcities({ name: name })
        .then((res: any) => {
          console.log(name);
          console.log(res);
        })
        .catch();
    }
    const route = useRoute();
    //获取传递过来的值
    onMounted(() => {
      data.name = route.query.msgs! as string;
      console.log(data.name);

      const map = new AMap.Map("container",{});

      console.log(map);
      getCity(data.name)
    });

    return {
      ...toRefs(data),
      getCity
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
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
}
.citybox {
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.timebox {
  width: 350px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 15px;
}
.peobox {
  width: 217px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
}
.l-box {
  width: 589px;
  height: 260px;
}
.r-box {
  width: 420px;
  height: 260px;
}
#container {
  width: 420px;
  height: 260px;
}
</style>