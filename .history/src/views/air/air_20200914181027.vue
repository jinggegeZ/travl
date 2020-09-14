<template>
 <div class="d-f j-c a-l w-1">
  <div class="airbox">
    <div class="a-top">国内机票</div>
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
</style>