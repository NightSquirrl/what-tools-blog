---
title: 🤯 前端学习指引
sticky: 98
tag:
  - web
  - 前端
recommend: 0
---

# Vue

> vue2 vue3 在底层的逻辑肯定是有很多的区别,但是在使用上,还是有很多相似的地方,或者说没有区别,在大脑中不要去认为他们区别很大,否则你会觉得很很难搞.
> 比如:Javascript 与 Java 有区别吗,那肯定是有的完全不同的两个语言,但是又没有区别,因为他们实现一个方法的逻辑打部分相同,只是调用的方法不同罢了.

## 宏观

```javascript
// vue2 代码结构
<template>
</template>

<script lang='ts'>
export default {
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
    return {}
  },
  methods: {},
  mounted () {
  },
}
</script> 

<style lang='less' scoped>

</style>

// vue3 代码结构

<template>
</template>

<script setup>
import ...

const ...

function ...

// 生命周期
onMounted(() => {})
</script>

<style></style>
```
我们可以看出本质上结构差不不大,只是 vue2 的设计决定了他的代码结构只能写成选项式API 类似于对象的配置项
而 vue3 属于组合式 API 不需要去理解什么是组合式 API 选项是 API ,只需要知道 vue3 更加的符合 JS 原生的写法,在代码结构上与 React 相似

## Vue3

> 变量的定义

```javascript
const ref = ref(1)
const reactive = reactive({ name: '张三' })
```

> 函数的定义
> 与 一个 JS 文件相同

```javascript
const fn = () => {

}
// or
function fn() {
  
}
```

> 生命周期

![生命周期](https://cn.vuejs.org/assets/lifecycle_zh-CN.W0MNXI0C.png)

```javascript
// 关于 setup 的说明

<script setup>
// 此时这个里面的代码都是属于 setup 生命周期

</script>

setup:开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method

// 组件挂载到节点上之前执行的函数。
onBeforeMount(() => {

})
// 组件挂载完成后执行的函数。
onMounted(() => {

})

onUnmounted(() => {

})

// 组件更新之前执行的函数
onBeforeUpdate(() => {

})

// 组件更新完成之后执行的函数
onUpdated(() => {

})

// 组件卸载之前执行的函数
onBeforeUnmount(() => {

})

// 组件卸载完成后执行的函数
onBeforeUpdate(() => {

})

// 被包含在中的组件，会多出两个生命周期钩子函数。被激活时执行
onActivated(() => {

})

// 比如从 A 组件，切换到 B 组件，A 组件消失时执行 一般用在使用<component>
onDeactivated(() => {

})

// 当捕获一个来自子孙组件的异常时激活钩子函数
onErrorCaptured(() => {

})

```

> watch 监听

```javascript

const ref = ref(1);

watch(ref,  (newQuestion, oldQuestion) => {
// newQuestion 最新的数据
// oldQuestion 之前的数据
})

// 注意点 
// newQuestion, oldQuestion 的值就是 ref.value
// 无法监听对象中的属性值

watch(()=>ref,  (newQuestion, oldQuestion) => {
// newQuestion 最新的数据
// oldQuestion 之前的数据
})

// 如果写的是 ref 那么newQuestion | oldQuestion 是 ref.value
// 如果写的是 ref.value 那么newQuestion | oldQuestion 是 不需要.value 的数据

watch(
  () => obj.count,
  (count) => {
    console.log(`Count is: ${count}`)
  }
)





``` 










1. Vue
2. Typescript
3. JS 常见方法归纳
4. 前端处理逻辑
<Test/>

<script setup>
import Test from '@source/web/Test.vue'

</script>