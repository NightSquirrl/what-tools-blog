<script setup lang='ts'>
import { ref, watch } from 'vue'
const a = ref(1)
const test  = ()=> {
    a.value++
}

watch(()=>a,(a,b)=> {
    console.log('[ a,b ] >', a,b)

},{deep:true})
</script>


<template>
    <button @click="test">{{ a }}</button>
</template>

<style  scoped>

</style>
