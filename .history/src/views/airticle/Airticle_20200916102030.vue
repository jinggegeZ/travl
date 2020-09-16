<template>
  <div class="article">
    <div class="article_a">
      <!-- 左边 -->
      <div class="article_left">
        <!-- 页面位置 -->
        <div>
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>
              <a href>旅游攻略</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>攻略详情</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <!-- 文章 -->
        <div>
          <!-- 标题 -->
          <h1 class="art">{{Tlist.title}}</h1>
          <!-- 阅读数 -->
          <div class="art_a">
            <span>攻略：2019-05-22 12:59</span>
            <span>阅读：{{Tlist.watch}}</span>
          </div>
          <!-- 内容 -->
          <div class="art_b">
            <div v-html="Tlist.content"></div>
          </div>
        </div>
        <!-- 分享 -->
        <div class="art_c">
          <div class="art_d">
            <img src="../../../public/image/pl.png" alt />
            <div>评论</div>
          </div>
          <div>
            <img src="../../../public/image/share.png" alt />
            <div>分享</div>
          </div>
        </div>
        <!-- 评论 -->
        <div>
          <a-textarea
            v-model:value="value"
            placeholder="说点什么吧。。。"
            :auto-size="{ minRows: 2, maxRows: 5 }"
          />
        </div>
        <!-- 图片上传 -->
        <div class="art_e">
          <div class="clearfix">
            <a-upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture-card"
              :file-list="fileList"
              @preview="handlePreview"
              @change="handleChange"
            >
              <div v-if="fileList.length < 8">
                <a-icon type="plus" />
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
            <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
              <img alt="example" style="width: 100%" :src="previewImage" />
            </a-modal>
          </div>
        </div>
        <!-- 评论列表 -->
        <div class="pl"></div>
      </div>
      <!-- 右边 -->
      <div class="article_right">
        <h4 class="title">相关攻略</h4>
        <div class="art_list" v-for="(item,index) in Rlist" :key="index">
          <div class="art_list_a">
            <img class="art_list_b hvr-grow" :src="item.images.slice(0,1)" alt />
          </div>
          <div class="art_list_c">
            <div class="art_list_d">{{item.title}}</div>
            <div class="art_list_e">
              <span>2019-05-22 1:16</span>
              <span v-if="item.watch != null">阅读 {{item.watch}}</span>
              <span v-if="!item.watch">阅读 0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import api from "@/http/api";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
import { useRoute, useRouter } from "vue-router";
interface T {
  title: string;
  id: number;
  
}
interface Q {
 name:string
  uid:string
  status:string
  url:string
}
interface Total {
  data: T[];
}

interface Data {
  Tlist: string[];
  id: number;
  Rlist: Total[];
  previewVisible:boolean;
  previewImage:string;
  fileList:Q[]
}
export default defineComponent({
  name: "",
  props: {},
  components: {},

  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      id: 0,
      Tlist: [],
      Rlist: [],
      previewVisible:false,
      previewImage:''
      fileList:[
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-4',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
     
      ]
    });
    //点击返回
    const  handleCancel = () => {
       data.previewVisible = false;
    }
    const handlePreview =(file:any) => {
       if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      data.previewImage = file.url || file.preview;
      data.previewVisible = true;
    }
    const handleChange
    const route = useRoute();
    //获取传递过来的值
    onMounted(() => {
      if (route.query.msg) {
        data.Tlist = JSON.parse(route.query.msg! as string);
        console.log(data.Tlist);
      }
      api
        .getrecommed({ id: data.id })
        .then((res: any) => {
          data.Rlist = res.data;
          console.log(res);
        })
        .catch();
    });
    return {
      ...toRefs(data),
      handleCancel
    };
  },
});
</script>

<style scoped lang='scss'>
.article {
  display: flex;
  justify-content: center;
}
.article_a {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.article_left {
  width: 700px;
}
.art {
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}
.art_a {
  color: #999;
  padding-bottom: 20px;
  text-align: right;
  font-size: 14px;
}
.art_a span {
  padding-left: 20px;
}
.art_b {
  min-height: 200px;
}

.art_c {
  padding: 50px 0 30px;
  display: flex;
  justify-content: center;
}
.art_c img {
  width: 40px;
  font-size: 15px;
  color: #999;
  text-align: center;
}
.art_d {
  margin-right: 40px;
}
.art_e {
  margin-top: 20px;
  min-height: 60px;
}
.pl {
  border: 1px solid #ddd;
}

.article_right {
  width: 280px;
}
.title {
  font-weight: 400;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  color: #666666;
}
.art_list {
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
.art_list_a {
  width: 100px;
  height: 80px;
  overflow: hidden;
}
.art_list_b {
  width: 100px;
  height: 80px;
  object-fit: cover;
}
.art_list_c {
  position: relative;
  height: 80px;
  width: 60%;
}
.art_list_d {
  font-size: 14px;
}
.art_list_e {
  font-size: 12px;
  color: #999;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.art_list_e span {
  padding-right: 5px;
}
.art_list:hover .hvr-grow {
  transform: scale(1.2);
}
.art_list:hover .art_list_d {
  color: #e0620d;
}
</style>