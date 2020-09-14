<template>
 <div>
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
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'

interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
    
   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>
