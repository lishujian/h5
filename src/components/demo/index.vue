<template>
    <div>
        <div>第一个div</div>
        <slot name="demo11">
            <!-- <p>第一个插槽</p> -->
        </slot>
        <div>分界线</div>
        <div>
        <slot name="demo22">
            
            <p>第二个插槽</p>
        </slot>
        </div>
        <div v-if="test === 'off'">{{test}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    props:{
        test:{
            type: String,
            default: ''
        }
    }

}
</script>

