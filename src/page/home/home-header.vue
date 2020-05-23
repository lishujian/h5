<template>
    <headSlor class="head-box">
        <div class="left" slot="left">
            <!-- <img src="../../assets/img/ewm.png" alt=""> -->
        </div>
        <div class="center" slot="conter">2222</div>
        <div class="right" slot="right">
            <img src="../../assets/img/msg.png" alt="">
        </div>
    </headSlor> 
</template>

<script>

import headSlor from '../../components/header/index.vue';  //导入公共headSlor组件

export default {
    data(){
        return{

        }
    },
    components:{
        headSlor
    }
}
</script>

<style lang='scss' scoped>

    .left{
        width: 28px;
        height: 50px;
        position: relative;
        background: yellow;
        
    }
    .left img{      
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;
        margin-top: -14px;


    }

    .right{
        position: relative;
        width: 28px;
        height: 50px;
        
    }
    .right img{
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;
        margin-top: -14px;
    }
    
    

</style>