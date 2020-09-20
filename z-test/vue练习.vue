<template>
    <div>
        <!-- {{}} v-html v-text的使用 -->
        <div>{{num}}</div>
        <div v-html="span">demo1</div>
        <div v-text="demo2"></div>
       
        <!-- 表单控制绑定 v-model -->
        <select name="" id="" v-model="dev" >
            <option value="1">1</option>
            <option value="2" selected>2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <h1>我会跟着变额{{dev}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num:2,
            span:'<span>v-html的使用</spam>',
            demo2: '我是demo2的内容',
            dev: ''
        }
    },
    computed:{
        test(){
            return this.num * 2
        }
    }
    
}
</script>

<style scoped>

</style>