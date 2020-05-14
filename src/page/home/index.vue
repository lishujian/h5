<template>
  <div class="box">
    <div class="box-content">
      <header class="home-header">home-header</header>
      <div class="content">内容        
      </div>
      <div class="go-top">返回顶部</div>
      <router-view></router-view>          
    </div>
    
  </div>
</template>

<script>


export default {
  data() {
    return {}
    
    },
    
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