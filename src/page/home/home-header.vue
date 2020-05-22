<template>
    <headSlor class="head-box">
        <div class="lefe" slot="left">
            <img src="../../assets/img/ewm.png" alt="">
        </div>
        <div class="center" slot="conter">2222</div>
        <div class="right" slot="right">
            <img src="../../assets/img/msg.png" alt="">
        </div>
    </headSlor> 
</template>

<script>

import headSlor from '../../components/header/index.vue';

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
        width: 100%;
        height: 100%;
    }
    .left img{
        width: 28px;
        height: 28px;
        position: relative;

        margin-top: 50%;
        margin-top: -14px;



    }

    .right img{
        width: 28px;
        height: 28px;
    }
    
    

</style>