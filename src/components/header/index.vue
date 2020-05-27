<template>
    <div class="z-box">
        <div class="left" v-if="$slots.left">   
            <slot name="left"></slot>
        </div>
        <div class="conter" v-if="$slots.conter">
            <slot name='conter'></slot>
        </div>
        <div class="right" v-if="$slots.right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@import '../../assets/sass/index.scss';

//嵌套css 用法

.z-box{
    justify-content: space-around;
    display: flex;
    position: relative;
    .left{
        margin-left: 5px;
       
    }

    .conter{
        flex: 1;
        margin: 0 10px;
        background: red;
      
    
    }

    .right{
        margin-right: 5px;
        
    }
}

</style>