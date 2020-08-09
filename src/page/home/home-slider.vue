<template>
  <swiper class="swiper" :options="swiperOption">
    <SliderLoading></SliderLoading>
    <!-- <swiper-slide v-for="(banner,index) in slider" :key="index">
      <img :src="banner.picUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'; //引入swiper 组件
  import 'swiper/css/swiper.css'
  

  import {getImg} from '../../api/get-home-slider-img.js'  //导入获取图片资源数据
  import SliderLoading from '../../assets/loading/index.vue'
  export default {
    name: 'home-swiper',
    title: 'Pagination',
    components: {
      Swiper,
      SwiperSlide,
      SliderLoading

    },
    data() {
      return {
        //banners:[require('./img/1.jpg'), require('./img/2.jpg'), require('./img/3.jpg')],
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
    created(){   //实例创建完成，立即调用 
        getImg().then((data)=>{    //大api的信息赋值给slider
          // console.log(data)
          this.slider = data;
        })

    },
    methods:{
      
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