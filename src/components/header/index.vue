<template>
    <div class="box">
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
.box{
    justify-content: space-around;
    display: flex;
    & .left{
        margin-left: 10px;
    }

    & .conter{
        flex: 1;
        margin: 0 10px;
        background: red;
    
    }

    & .right{
        margin-right: 10px;

    }
}


</style>