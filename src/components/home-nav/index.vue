<template>
    <nav>
        <ul>
            <li v-for="(item, index) in navs" :key="index">
                <a :href="item.linkUrl">
                    <img :src="item.picUrl" alt="">
                    <span>{{item.text}}</span>
                </a>
            </li>      
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            navs:navs
        }
    }
}

var navs = [

  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-1.png'),
    text: '拍卖'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-2.png'),
    text: '拍卖'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-3.png'),
    text: '拍卖'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-4.png'),
    text: '拍卖'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-5.png'),
    text: '拍卖'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-6.png'),
    text: '拍卖'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-7.png'),
    text: '拍卖'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-8.png'),
    text: '拍卖'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-9.png'),
    text: '拍卖'
  },
  {
    linkUrl: 'https://www.imooc.com',
    picUrl: require('./img/nav-item-10.png'),
    text: '拍卖'
  }
];

</script>

<style scoped>

    *{
        list-style: none;
    }
    ul{
        display: flex;
        justify-content: conter;
        flex-wrap: wrap;   /* 超出折行 */
        flex-direction: row;
        text-align: center;
        
        
    }
    ul li{
        width: 20%;
        margin-top: 10px;
        
    }

    ul li img{
        width: 50%;
    }

    span{
        font-size: 12px;
    }
</style>