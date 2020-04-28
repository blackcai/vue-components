<template>
  <div class="goods-image-list">
    <vue-draggable v-model="fileList" class="upload-list">
      <div class="goods-image-group" v-for="(item, index) in fileList" :key="index">
        <div class="goods-upload">
          <img :src="item.raw" alt="" class="item-thumbnail">
          <div class="item-action">
          <span class="item-preview" @click="handlePreview(item)">
            <i class="el-icon-zoom-in"></i>
          </span>
            <span class="item-delete" @click="handleDelete(item)">
            <i class="el-icon-delete"></i>
          </span>
          </div>
        </div>
        <div class="image-txt" v-if="limit !== 1">
          {{ index === 0 ? '封面图' : ''}}
        </div>
      </div>
    </vue-draggable>
    <el-upload
      v-if="fileList < limit"
      drag
      action=""
      :auto-upload="false"
      :on-change="handleChange"
      multiple
      :show-file-list="false"
      class="drag-box"
      :limit="limit"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处</div>
      <div class="el-upload__text">或<em>点击上传</em></div>
    </el-upload>
  </div>
</template>

<script>
  import VueDraggable from 'vuedraggable'

  export default {
    name: 'GoodsImageList',
    components: {
      VueDraggable
    },
    props: {
      limit: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        myArray: [{
          name: '1',
          id: 1,
          fixed: true
        }],
        fileList: [],
        fileList2: []
      }
    },
    created() {
      for (let i = 0; i < 10; i++) {
        this.$set(this.myArray, [i], {
          name: i,
          id: i,
          fixed: true
        })
      }
    },
    methods: {
      handlePreview(file) {
        console.log(file)
      },
      handleDelete(file) {
        console.log(file)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview(file) {
        console.log(file)
      },
      handleChange(file, fileList) {
        // 上传成功后再进行处理
        console.log(file, fileList)
        this.fileList = fileList
      }
    }
  }
</script>

<style lang="scss" scoped>
.goods-image-list{
  .upload-list{
    margin: 0;
    display: inline;
    vertical-align: top;
  }
  .goods-image-group {
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;

    .image-txt {
      color: #606266;
      font-size: 12px;
      text-align: center;
      padding-top: 10px;
    }

    .goods-upload {
      position: relative;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #c0ccda;
      border-radius: 6px;
      box-sizing: border-box;
      width: 148px;
      height: 148px;
      display: inline-block;
      transition: all .5s cubic-bezier(.55, 0, .1, 1);
      font-size: 14px;
      color: #606266;
      line-height: 1.8;

      .item-thumbnail {
        width: 100%;
        height: 100%;
      }

      .item-action {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        cursor: default;
        text-align: center;
        color: #fff;
        opacity: 0;
        font-size: 20px;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s;
        line-height: 148px;

        .item-preview {
          display: none;
          cursor: pointer;
        }

        .item-delete {
          display: none;
          cursor: pointer;
        }

        &:hover {
          opacity: 1;

          .item-preview {
            display: inline-block;
          }

          .item-delete {
            display: inline-block;
          }
        }
      }
    }
  }
  .drag-box{width: 148px;height:148px;display: inline-block;
    /deep/ .el-upload{width:100%;height:100%;
      .el-upload-dragger {width:100%;height:100%;}
      .el-upload__text{line-height: 1.15;}
    }
  }
}
</style>
