<template>
 <div class="d-f w-1 j-c">
    <div class="createbox">
      <div>123</div>
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
   min-height: 600px;
}
</style>