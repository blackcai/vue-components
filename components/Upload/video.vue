<template>
  <div class="goods-video">
    <div class="goods-video-group" v-if="videoUrl">
      <div class="goods-upload">
        <video :src="videoUrl" alt="" class="item-thumbnail" />
        <div class="item-action">
          <span class="item-preview" @click="handlePreview">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span class="item-delete" @click="handleDelete">
            <i class="el-icon-delete"></i>
          </span>
        </div>
      </div>
    </div>
    <el-upload
      v-if="!videoUrl"
      drag
      action=""
      :auto-upload="false"
      :on-change="handleChange"
      multiple
      :show-file-list="false"
      :limit="limit"
      class="drag-box"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处</div>
      <div class="el-upload__text">或<em>点击上传</em></div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    name: 'Video',
    props: {
      limit: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        videoUrl: ''
      }
    },
    methods: {
      handleChange() {},
      handlePreview(file) {
        console.log(file)
      },
      handleDelete(file) {
        console.log(file)
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-video{
    .goods-video-group {
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
