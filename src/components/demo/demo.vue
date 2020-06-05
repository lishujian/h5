<template>
    <div>
        <h1>{{title}}</h1>
        <div>{{content}}</div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        content:{
            type: String,
            default: ''
        }
    }
}

</script>