<template>
  <div>
    <top></top>
     <router-view/>
    <fot></fot>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import top from '../../components/top/top.vue';
import fot from '../../components/fot/fot.vue';
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {
    top,
    fot,
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>