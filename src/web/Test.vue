<template>
    <Son :a="a" @setA="setA"></Son>
</template>

<script setup lang='ts'>
const a = ref(0)

function setA(value:string) {
    a.value = value
}

interface IEmit {
    (e: 'setA', value: string): void
}

const emit = defineEmits<IEmit>()
emit('setA', 2)
</script>







// 只有defineProps<IProps>()的时候 <template> 中可以直接使用 name
// 但是在 script 中需要变量来接收
// const props = defineProps<IProps>()
// props.name => 这样 JS 或者 TS 才可以获取到值
// 需要注意的是不能使用结构赋值,否则失去响应式可以使用 const { name } = toRefs(props) // 此时可以结构赋值

