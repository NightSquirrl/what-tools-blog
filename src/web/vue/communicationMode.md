---
title: Vue中组件的通信方式
tag:
  - Vue
---

## 子组件和父组件的通信方式
### Vue2 中实现子组件给父组件传递数据的方法：
子组件中，使用 $emit 触发一个自定义事件，并传递需要传递的数据：

```js
// 子组件
this.$emit('custom-event', data);
```
父组件中，监听子组件触发的自定义事件，并在事件处理函数中接收数据：

```html
<!-- 父组件 -->
<child-component @custom-event="handleCustomEvent"></child-component>
```

```js
// 父组件
methods: {
  handleCustomEvent(data) {
    console.log('接收到子组件传递的数据：', data);
  }
}

```

### Vue3 中实现子组件给父组件传递数据的方法：
#### emit 的方式
 > 子组件传递
```vue
<template>
  <button @click="clickChild">点击子组件</button>
</template>
 
<script setup>
import { defineEmits } from 'vue'
// 使用defineEmits创建名称，接受一个数组
const emit = defineEmits(['clickChild'])
const clickChild=()=>{
  let param={
    content:'b'
  }
  //传递给父组件
  emit('clickChild',param)
}
</script>
 
<style>
 
</style>
```

> 父组件接受

```vue
<template>
  <div class="hello">
  我是父组件
  <!-- clickChild是子组件绑定的事件，click是父组件接受方式 -->
   <Child  @clickChild="clickEven"></Child>
 <p>子组件传递的值是 {{result}}</p>
 </div>
</template>
 
<script setup>
import Child from './Child'
import {ref} from 'vue'
const result=ref('')
const clickEven=(val)=>{
  console.log(val);
  result.value=val.content
}
</script>
 
<style scoped>
 
</style>
```

#### 父组件获取子组件中的属性值

> 核心在于 子组件的 `defineExpose({sex, info})`

子组件传递的方式
```vue
<template>
  <div>
        <h2> 我是子组件</h2>
        <p>性别:{{ sex}}</p>
    </div>
</template>
 
<script setup>
import { reactive, ref,defineExpose } from "vue";
let sex=ref('男')
let info=reactive({
    like:'王者荣耀',
    age:18
})
defineExpose({sex, info})
</script>
 
<style>
 
</style>
```

父组件显示的方式

> 为子组件的添加 ref 实例

```vue
<template>
  <div class="hello">
  我是父组件
   <Child ref="testcomRef"></Child>
<button @click="getSonHander">获取子组件中的数据</button>
 </div>
</template>
 
<script setup>
import Child from './Child'
import {ref} from 'vue'
const testcomRef = ref()
const getSonHander=()=>{
  console.log('获取子组件中的性别', testcomRef.value.sex );
    console.log('获取子组件中的其他信息', testcomRef.value.info )
}
</script>
 
<style scoped>
 
</style>
```

#### 子组件调用父组件的方法

子组件

```vue

<template>
  <div id="cesiumContainer" class="map-x">
    <button class="close" @click="changeFatherData">X</button>
  </div>
</template>
<script setup>
import { defineEmits } from "vue"
const emits = defineEmits(["closeFather"])
 
const changeFatherData = () => {
  emits("closeFather")
}
</script>
```
父组件

```vue
<template>
<XYZLayerList @closeFather="closeFather"></XYZLayerList>
</template>
<script setup>
import XYZLayerList from "./XYZLayerList.vue"//引入子组件
const closeFather = () => {
  console.log("触发了父组件方法")
}
</script>
```