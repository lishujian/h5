<template>
  <div id="app">
     <div class="floor">
     <floor></floor> <!-- 底部tab组件 -->
     </div>
    <router-view></router-view>
  </div>  
</template>

<script>
import floor from './components/tabbar'  //导入tab组件
export default {
  name: 'App',
  data(){
    return{}
  },
  components:{
      floor
  }

}
</script>


