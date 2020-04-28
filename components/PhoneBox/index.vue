<template>
  <div class="phone-box">
    <div class="content">
      <div class="phone-title">
        <div class="nav-name">自定义内容</div>
        <div class="nav-op">
          <div class="">
            <i class="el-icon-more"></i>
          </div>|
          <div class="">
            <svg-icon icon-class="yuan"></svg-icon>
          </div>
        </div>
      </div>
      <div class="phone-detail">
        <scroll-bar class="scroll-container">
          <slot />
        </scroll-bar>
      </div>
    </div>
  </div>
</template>

<script>
  import ScrollBar from '../ScrollBar/index'
  export default {
    name: 'PhoneBox',
    components: {
      ScrollBar
    }
  }
</script>

<style lang="scss" scoped>
  .phone-box{
    width:400px;height:922px;
    position:relative;overflow: hidden;padding:27px 28px 35px 25px;
    background: url('../../assets/images/iphonex.png') no-repeat;
    background-size:cover;
    .content{
      height:100%;border-radius:40px;overflow: hidden;position:relative;
    }
    .phone-title{
      border-bottom:1px solid #e4e4e4;margin-top:35px;
      height:40px;display: flex;align-items: center;position:relative;
      .nav-name{text-align: center;width: 100%;}
      .nav-op{position:absolute;display: flex;align-items:center;right:0;border:1px solid #ccc;border-radius:100px;padding: 3px 10px;color:#ccc;
        >div{
          &:first-child{padding-right:5px;color:#232323;}
          &:last-child{height:20px;width:20px;margin-left:5px;color:#232323;
            svg{width:100%;height:100%;}
          }
        }
      }
    }
    .phone-detail{position:absolute;top:75px;left:0;right:0;bottom:0;overflow: hidden;
      .scroll-container{background:none;}
    }
  }
</style>
