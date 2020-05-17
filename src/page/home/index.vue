<template>
  <div class="box">
      <header class="home-header">home-header</header>
      <div class="content">内容        
      </div>
      <div class="go-top">返回顶部</div>
      <router-view></router-view>         
    </div>
</template>

<script>

export default {
  name:'home',
  data() {
    return {}
    
    },
    
};

</script>

<style lang='scss' scoped>
@import '../../assets/sass/index.scss';


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