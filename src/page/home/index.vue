<template>
  <div class="box">
      <header class="home-header">
        <homeHeader></homeHeader>
      </header>
      <div class="content">
        <homeSlide>123</homeSlide>        
      </div>
      <div class="go-top">返回顶部1</div>
      <router-view></router-view>         
    </div>
</template>

<script>
import homeHeader from './home-header.vue'  //导入header 业务组件
import homeSlide from './home-slider.vue'  //导入home-slide 业务组件
export default {
  name:'home',
  data() {
    return {
      test: 1234567890
    }
    
    },
    components:{
      homeHeader,
      homeSlide
    }
    
};

</script>

<style lang='scss' scoped>
@import '../../assets/sass/index.scss';  //导入汇总样式路径


.box{
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  height: 100%;
  background: $bgc-theme;
  margin-bottom: $tabbar-height;
  overflow: hidden;
  font-size: 16px;
}

</style>
