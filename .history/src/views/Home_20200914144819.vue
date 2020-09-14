<template>
  <div class="content">
    <!-- 轮播 -->
    <a-carousel arrows>
      <template v-slot:prevArrow>
        <div class="custom-slick-arrow" style="left: 10px;zIndex: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template v-slot:nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </a-carousel>
    <!-- 搜索 -->
    <div class="cover">
      <div>
        <!--  -->
        <div class="cover_a">
          <div class="cover_b_active cover_b">攻略</div>
          <div class="cover_b">酒店</div>
          <div class="cover_b">机票</div>
        </div>
        <!--搜索框  -->
        <div class="cover_c">
          <a-input-search
            v-model:value="value"
            placeholder="搜索城市"
            style="width: 200px"
            @search="onSearch"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext,onMounted } from "vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import api from "@/http/api";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      const 
    });
    return {
      ...toRefs(data),
      value: '',
    };
  },
});
</script>

<style scoped lang='scss'>
.content {
  position: relative;
  height: 600px;
  width: 100%;
}
.ant-carousel ::v-deep(.slick-slide) {
  text-align: center;
  height: 600px;
  line-height: 600px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel ::v-deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel ::v-deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel ::v-deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel ::v-deep(.slick-slide h3) {
  color: #fff;
}
.cover {
  position: absolute;
  left: 25%;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cover_a {
  display: flex;
}
.cover_b_active {
  font-size: 16px;
  display: block;
  color: #333 !important;
  height: 0;
  width: 86px;
  line-height: 36px;
  padding-left: 5px;
  border-width: 0px 16px 36px 0px;
  border-style: none solid solid;
  border-color: transparent transparent #eee !important;
  text-align: center;
  border-radius: 5px 0 0 0;
}
.cover_b {
  font-size: 16px;
  display: block;
  color: #fff;
  height: 0;
  width: 86px;
  line-height: 36px;
  padding-left: 5px;
  border-width: 0px 16px 36px 0px;
  border-style: none solid solid;
  border-color: transparent transparent rgba(0, 0, 0, 0.5);
  text-align: center;
  border-radius: 5px 0 0 0;
}
.cover_c{
  width: 550px;
}
</style>