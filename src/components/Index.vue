<template>
  <div>
    <el-button @click="previewIsShow = true;">预览</el-button>

    <el-dialog title="图片预览" width="95%" top="1%" :visible.sync="previewIsShow">
      <el-button @click="flushImg">刷新</el-button>
      <div :key="key" style="margin-top: 10px">
        <img src="https://picsum.photos/2500/1667" class="previewImg" alt=""/>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      key: 0,
      previewIsShow: false,
    }
  },
  methods: {
    // 刷新图片
    flushImg() {
      this.key += 1;
    },
  }
}
</script>

<style scoped>
.previewImg {
  display: block;
  -webkit-user-select: none;
  margin: auto;
  cursor: zoom-in;
  background-color: hsl(0, 0%, 90%);
  transition: background-color 300ms;
  height: 100%;
  width: 100%;
}
</style>
