<template>
 <div class="loginbox">
   <div class="enterloginbox">
      <a-card
    style="width:100%"
    title="Card title"
    :tab-list="tabList"
    :active-tab-key="key"
    @tabChange="key => onTabChange(key, 'key')"
  >
    <template v-slot:customRender="item">
      <span> <home-outlined />{{ item.key }} </span>
    </template>
    <template v-slot:extra>
      <a href="#">More</a>
    </template>
    {{ contentList[key] }}
  </a-card>
   </div>
 </div>
</template>

<script lang='ts'>
import { Tabs } from 'ant-design-vue'
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface tabs {
   
}
interface Data {
   tablist:tabs
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