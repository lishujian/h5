<template>
    <div>
        <div v-if="$slots.left">
            <slot name="left"></slot>
        </div>
        <div v-if="$slots.conter">
            <slot name='conter'></slot>
        </div>
        <div v-if="$slots.right">
            <slot name="right"></slot>
        </div>
    </div>
</template>