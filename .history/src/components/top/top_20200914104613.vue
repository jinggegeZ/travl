<template>
 <div class="topbox">
    <div class="topbox1">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
.topbox {
   width: 100%;
   display: flex;
   justify-content: center;
}
.topbox1 {
   width: 1120px;
   height: 60px;
   background: skyblue;
}
</style>