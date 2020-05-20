<template>
  <div class="box">
      <header class="home-header">
        <homeHeader></homeHeader>
      </header>
      <div class="content">内容        
      </div>
      <div class="go-top">返回顶部</div>
      <router-view></router-view>         
    </div>
</template>

<script>
import homeHeader from './home-header.vue'

export default {
  name:'home',
  data() {
    return {}
    
    },
    components:{
      homeHeader
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