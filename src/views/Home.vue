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
      <div v-for="(item,index) in arr" :key="index">
        <img :src="`http://157.122.54.189:9095${item.url}`" alt class="image" />
      </div>
    </a-carousel>
    <!-- 搜索 -->
    <div class="cover">
      <div>
        <!-- 搜索框 -->
        <div class="cover_a">
          <div
            class="cover_b"
            @click="choseitem(item,index,path)"
            v-for="(item,index) in list"
            :key="index"
            :class="activeindex === index ? 'cover_b_active':''"
          >{{item.name}}</div>
        </div>
        <!--搜索框  -->
        <div class="cover_c">
          <div v-if="activeindex === 0">
            <a-input-search
              v-model="city"
              placeholder="搜索城市"
              style="width: 200px"
              @search="gotouer"
             
            />
          </div>
          <div v-if="activeindex === 1">
            <a-input-search
              v-model="hotel"
              placeholder="输入城市搜索酒店"
              style="width: 200px"
              @search="gohotel"
             
            />
          </div>
          <div v-if="activeindex === 2">
            <a-input-search
              v-model:value="hotel"
              placeholder="请输入出发地"
              style="width: 200px"
            />
          </div>
        </div>
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
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import api from "@/http/api";
import { Res, ResItem } from "@/types";
import { useRouter } from "vue-router";
interface Item {
  name: string;
  path: string;
}
interface Data {
  arr: ResItem[];
  list: Item[];
  activeindex: number | string;
  activepath: string;
  city: string;
  hotel: string;
  sales: ResItem[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      arr: [],

      list: [
        {
          name: "攻略",
          path: "post",
        },
        {
          name: "酒店",
          path: "hotel",
        },
        {
          name: "机票",
          path: "air",
        },
      ],
      activeindex: 0,
      activepath: "",
      city: "",
      hotel: "",
      sales: [],
    });
    const router = useRouter();
    //选择item
    const choseitem = (item: Item, index: number, path: string) => {
      data.activeindex = index;
      data.activepath = item.path;

      if (data.activepath === "air") {
        setTimeout(() => {
          router.push("air");
        }, 1500);
      }
    };
    //search事件点击搜索城市
    const gotouer= (city:string) => {
      console.log(city);
      router.push({
        path:'post',
        query:{
          msgs:city
        }
      })
    }
    const gohotel = (hotel:string) => {
      console.log(hotel);
       router.push({
        path:'hotel',
        query:{
          msgs:hotel
        }
      })
    }
   
    //获取list

    onMounted(() => {
      api
        .getswiper()
        .then((res: Res) => {
          data.arr = res.data;
        })
        .catch((err: Error) => {
          console.log(err);
        });
    });
    return {
      ...toRefs(data),
      city: "",
      hotel: "",
      choseitem,
      gotouer,
      gohotel
    
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
.cover_c {
  width: 550px;
}
.image {
  width: 100%;
  height: 600px;
}
</style>