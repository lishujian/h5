<template>
    <div class="loading">
        <div class="box">
            <span>加载中</span>
            <img src="../img/loading2.gif" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'loading',
    data(){
        return{}
    }
}
</script>

<style lang='scss' scoped>

    .loading{
        width: 100%;
        height: 100%;
        display: table;
        text-align: center;
    }
    .box{
        display: table-cell;
        vertical-align: middle;
        
    }

</style>