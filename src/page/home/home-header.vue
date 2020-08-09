<template>
    <headSlor class="head-box">
        <div class="left" slot="left">
            <img src="../../assets/img/ewm.png" alt="">
        </div>
        <div class="center" slot="conter">搜索框</div>
        <div class="right" slot="right">
            <img src="../../assets/img/msg.png" alt="">
        </div>
    </headSlor> 
</template>

<script>

import headSlor from '../../components/header/index.vue'  //导入公共headSlor组件
export default {
    name: 'home-header',
    data(){
        return{

        }
    },
    components:{
        headSlor,
    }
}
</script>


<style lang='scss' scoped>
@import '../../assets/sass/index.scss';

    .left{
        width: 28px;
        height: $navbar-height;
        position: relative;

        
    }
    .left img{      
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;
        margin-top: -14px;
    }

    .center{
        line-height:$navbar-height;

    }

    .right{
        position: relative;
        width: 28px;
        height: $navbar-height;
        
    }
    .right img{
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;
        margin-top: -14px;
        
        
    }
    
    

</style>