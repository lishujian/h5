<template>
  <div class="box">
    <div class="box-content">
      <header class="home-header">home-header</header>
      <div class="content">内容</div>
      <div class="go-top">返回顶部</div>    
      <floor></floor> <!-- 底部tab组件 -->
    </div>
  </div>
</template>

<script>
import floor from '../../components/tabbar'  //导入tab组件

export default {
  data() {
    return {}
    
    },
    components:{
      floor
  }
};

</script>

<style lang='scss' scoped>
@import '../../assets/sass/index.scss';


.box-content{
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  height: 100%;
  margin-bottom: $tabbar-height;
  overflow: hidden;
  font-size: 16px;
}

</style>