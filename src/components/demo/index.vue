<template>
    <div>
        <div>第一个div</div>
        <slot name="demo2">第一个插槽</slot>
        <slot name="demo1">
            <p>p第二个插槽</p>
        </slot>
    </div>
</template>

<script>
export default {

}
</script>

