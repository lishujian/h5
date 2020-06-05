<template>
    <div>
        <div class="d">
            <div slot="demo1">123</div>
            <demo ></demo>
            
        </div>
        <demo1 title=123  content='我是content'></demo1>
    </div>
</template>

<script>
import demo from '../../components/demo/index.vue';
import demo1 from '../../components/demo/demo.vue';
export default {
    data(){
        return{}
    },
    components:{
        demo,
        demo1
    }
}
</script>

<style scoped>
    .d{
        
    }
</style>