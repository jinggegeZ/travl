<template>
 <div class="d-f w-1 j-c">
    <div class="createbox d-f j-c-sb">
      <div class="main">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
      <div class="rightbox">456</div>
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
.createbox {
   width: 1000px;
   min-height: 700px;
}
.main {
   width: 750px;
   background: pink;
}
.rightbox {
   padding: 10px;
   width: 225px;
   height: 200px;
   border: 1px solid #ccc;
   min-height: 225px;
}
</style>