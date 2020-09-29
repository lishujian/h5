<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="text">
      <div class="content">
          <p>
        周杰伦1（Jay Chou），1979年1月18日出生于台湾省新北市，祖籍福建省泉州市永春县，中国台湾流行乐男歌手、原创音乐人、演员、导演等，毕业于淡江中学。
        2000年发行首张个人专辑《Jay》。2001年发行的专辑《范特西》奠定其融合中西方音乐的风格 [1]  。2002年举行“The One”世界巡回演唱会 [2]  。2003年成为美国《时代周刊》封面人物 [3-4]  。2004年获得世界音乐大奖中国区最畅销艺人奖 [5]  。2005年凭借动作片《头文字D》获得台湾电影金马奖、香港电影金像奖最佳新人奖 [6]  。2006年起连续三年获得世界音乐大奖中国区最畅销艺人奖 [7]  。2007年自编自导的文艺片《不能说的秘密》获得台湾电影金马奖年度台湾杰出电影奖 [8]  。
        2008年凭借歌曲《青花瓷》获得第19届金曲奖最佳作曲人奖。2009年入选美国CNN评出的“25位亚洲最具影响力的人物” [9]  ，同年获得第20届金曲奖最佳国语男歌手奖 [10]  。2010年入选美国《Fast Company》评出的“全球百大创意人物” [11]  。2011年再度获得金曲奖最佳国语男歌手奖，并且第4次获得金曲奖最佳国语专辑奖；同年主演好莱坞电影《青蜂侠》 [12]  。2012年登福布斯中国名人榜榜首 [13]  。2014年发行华语乐坛首张数字音乐专辑《哎呦，不错哦》 [14]  。2019年起举行“嘉年华”世界巡回演唱会 [15]  。
        演艺事业外，他还涉足商业、设计等领域。2007年成立杰威尔有限公司 [16]  。2011年担任华硕笔电设计师并入股香港文化传信集团 [17-18]  。
        周杰伦热心公益慈善，多次向中国内地灾区捐款捐物。2008年捐款援建希望小学 [19]  。2014年担任中国禁毒宣传形象大使 [20]  。
    </p>
    <p>
        周杰伦2（Jay Chou），1979年1月18日出生于台湾省新北市，祖籍福建省泉州市永春县，中国台湾流行乐男歌手、原创音乐人、演员、导演等，毕业于淡江中学。
        2000年发行首张个人专辑《Jay》。2001年发行的专辑《范特西》奠定其融合中西方音乐的风格 [1]  。2002年举行“The One”世界巡回演唱会 [2]  。2003年成为美国《时代周刊》封面人物 [3-4]  。2004年获得世界音乐大奖中国区最畅销艺人奖 [5]  。2005年凭借动作片《头文字D》获得台湾电影金马奖、香港电影金像奖最佳新人奖 [6]  。2006年起连续三年获得世界音乐大奖中国区最畅销艺人奖 [7]  。2007年自编自导的文艺片《不能说的秘密》获得台湾电影金马奖年度台湾杰出电影奖 [8]  。
        2008年凭借歌曲《青花瓷》获得第19届金曲奖最佳作曲人奖。2009年入选美国CNN评出的“25位亚洲最具影响力的人物” [9]  ，同年获得第20届金曲奖最佳国语男歌手奖 [10]  。2010年入选美国《Fast Company》评出的“全球百大创意人物” [11]  。2011年再度获得金曲奖最佳国语男歌手奖，并且第4次获得金曲奖最佳国语专辑奖；同年主演好莱坞电影《青蜂侠》 [12]  。2012年登福布斯中国名人榜榜首 [13]  。2014年发行华语乐坛首张数字音乐专辑《哎呦，不错哦》 [14]  。2019年起举行“嘉年华”世界巡回演唱会 [15]  。
        演艺事业外，他还涉足商业、设计等领域。2007年成立杰威尔有限公司 [16]  。2011年担任华硕笔电设计师并入股香港文化传信集团 [17-18]  。
        周杰伦热心公益慈善，多次向中国内地灾区捐款捐物。2008年捐款援建希望小学 [19]  。2014年担任中国禁毒宣传形象大使 [20]  。
    </p>
      </div>
    </swiper-slide>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-scroll-container',
    title: 'Scroll container',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar'
          },
          mousewheel: true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.swiper {
    height: 100%;
    margin-top: -50px;
.swiper-slide {
      .text {
        font-size: 18px!important;
        text-align: left!important;
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        > .content {
          > .title {
            margin: 0;
            text-align: center;

          }
          > p, blockquote {
            line-height: 2;
            text-indent: 2em;
          }
          blockquote {
            background-color: #ddd;
          }
        }
      }
    }
  }
</style>