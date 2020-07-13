<template>
    <div>
        <div>{{ad()}}</div>
        <div>{{add}}</div>
        <div class="d" ref="aa">
            
            
            
        </div>
        <demo2 test='off'>
            <div slot="demo22"  >我是demo22
                <p>我是demo22里的p</p>
            </div>

            <!-- <div slot="demo2"></div>
            <div slot="demo1"> </div> -->
        </demo2>
        <demo1 title=12345678  content='我是content'></demo1>
        
    </div>
</template>

<script>

import demo1 from '../../components/demo/demo.vue';
import demo2 from '../../components/demo/index.vue';

export default {
    data(){
        return{
            num:2
        }
        
    },
    components:{
        demo1,
        demo2
    },
    computed:{ //属性调用，带缓存
        add(){
            return this.num + 4
        }
    },
    methods:{ //函数调用，不带缓存，调用时需要（）
        ad(){ 
            return this.num + 10
        }
    },
    mounted(){
        //this.$refs.aa.innerHTML = '我是DOM来的'
    }
}

</script>

<style scoped>
    .d{
        
    }
</style>