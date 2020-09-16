<template>
 <div class="d-f w-1 j-c">
    <div class="createbox d-f j-c-sb">
      <div class="main">
         <div class="topbox">发表新攻略</div>
         <div class="scendbox">分享你的个人游记，让更多人看到哦</div>
         <div class="inputbox"><a-input placeholder="请输入标题" v-model="title" /></div>
         <div class="editbox">富文本编辑器</div>
         <div class="d-f">
            <div class="fongsize">选择城市</div>
            <div></div>
         </div>
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
   margin-top: 20px;;
   width: 1000px;
   min-height: 700px;
}
.main {
   width: 750px;
}
.rightbox {
   padding: 10px;
   width: 225px;
   height: 200px;
   border: 1px solid #ccc;
   min-height: 225px;
}
.topbox {
   width: 100%;
   height: 30px;
   font-size: 22px;
   margin-bottom: 10px;
}
.scendbox {
   width: 100%;
   height: 16px;
   font-size: 12px;
   margin-bottom: 10px;
}
.inputbox {
   width: 100%;
   height: 40px;
}
.inputbox input {
   width: 100%;
   height: 40px;
}
.editbox {
   width: 100%;
   min-height: 300px;
   border: 1px solid #ccc;
}
.fongsize {
   margin-left: 10px;
   margin-right: 10px;
   font-size: 14px;
   color: #ccc;
}
</style>