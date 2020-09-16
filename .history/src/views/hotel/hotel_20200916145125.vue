<template>
 <div class="d-f j-c w-1">
  <div class="hotelbox"></div>
  
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext, onMounted} from 'vue'
import {useRoute} from "vue-router"
interface Data {
  msgs:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
  msgs:''
})
  const route = useRoute()
  //获取传递过来的值
  onMounted(() => {
   if(route.query.msgs){
      data.msgs = route.query.msgs! as string
    console.log(data.msgs);
   }
  })



return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.hotelbox {
  width: 1000px;
}
</style>