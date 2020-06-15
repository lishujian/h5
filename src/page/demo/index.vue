<template>
    <div>
        <div>{{ad()}}</div>
        <div>{{add}}</div>
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
        return{
            num:2
        }
        
    },
    components:{
        demo,
        demo1
    },
    computed:{ //属性调用，带缓存
        add(){
            return this.num + 4
        }
    },
    methods:{ //函数调用，不带缓存
        ad(){ 
            return this.num + 10
        }
    },
}

</script>

<style scoped>
    .d{
        
    }
</style>