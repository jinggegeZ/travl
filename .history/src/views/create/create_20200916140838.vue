<template>
  <div class="d-f w-1 j-c">
    <div class="createbox d-f j-c-sb">
      <div class="main">
        <div class="topbox">发表新攻略</div>
        <div class="scendbox">分享你的个人游记，让更多人看到哦</div>
        <div class="inputbox">
          <a-input placeholder="请输入标题" v-model="title" />
        </div>
        <div class="editbox">富文本编辑器</div>
        <div class="d-f m-t-20 a-l">
          <div class="fongsize">选择城市</div>
          <div>
            <a-input placeholder="请输入游玩城市" v-model="city" />
          </div>
        </div>
        <div class="botbox">
          <div>
            <a-button type="primary">发布</a-button>
          </div>
          <div class="m-l-10">或者</div>
          <div class="save">保存到草稿</div>
        </div>
      </div>
      <div class="rightbox">
         <div>草稿箱（）</div>
         <div class="d-f j-c-sb a-l m-t-10">
            <div>
               <div class="namebox">名称</div>
               <div class="timebox">2020-09-20</div>
            </div>
            <div class="d-f a-l"><img class="imgbox" src="../../../public/image/edit.png" alt=""> <img class="imgbox" src="../../../public/image/delete.png" alt=""></div>
         </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.createbox {
  margin-top: 20px;
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
  margin-top: 20px;
  width: 100%;
  min-height: 460px;
  border: 1px solid #ccc;
}
.fongsize {
  margin-right: 10px;
  font-size: 14px;
}
.botbox {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.save {
  margin-left: 10px;
  color: orange;
}
.namebox {
   font-size: 14px;
}
.timebox {
   font-size: 12px;
   color: #ccc;
}
.imgbox {
   width: 16px;
   height: 16px;
}
</style>