<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="banner in banners" :key="banner">
      <img :src="banner" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper' //引入swiper 组件
  import 'swiper/css/swiper.css'

  import {gotImg} from '../../api/get-home-slider-img.js'  //导入获取图片资源数据
  export default {
    name: 'swiper-example-pagination',
    title: 'Pagination',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        banners:[require('./img/1.jpg'), require('./img/2.jpg'), require('./img/3.jpg')],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:true,  //自动轮播
          loop:true, //循环
        },
        slider:{}
      }
      
    },
    created(){
        this.gotSlider();

    },
    methods:{
      gotSlider(){
        gotImg().then(data=>{
          console.log(data)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

.swiper{
  height: 183px;
}

img{
  
  width: 100%;
  height: 100%;
}


</style>