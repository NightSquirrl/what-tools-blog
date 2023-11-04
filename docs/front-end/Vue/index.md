---
description: 适用于对 vue 有着简单理解的人
title: 🤯 Vue 快速入门
tag:
  - Vue
  - 前端
---

# 创建项目

```Shell
npm init vite@last

npm install -g create-vite

create-vite vite_cli_demo
```

# MVVM

下面是 MVVM 的基本概念：

1. 模型（Model）：模型是应用程序的数据部分，包含了应用程序的数据和业务逻辑。模型通常通过 AJAX 请求与后端进行交互，以获取或更新数据。

2. 视图（View）：视图是用户界面的一部分，负责呈现模型数据。视图通常是用 HTML 和 CSS 编写的，可以使用模板引擎来渲染动态数据。

3. 视图模型（ViewModel）：ViewModel 是连接模型和视图的桥梁，它负责将模型数据映射到视图上，并将用户的交互事件传递给模型。ViewModel 可以使用数据绑定来自动更新视图，当模型数据发生变化时，视图将自动更新。

在 MVVM 中，最重要的部分是数据绑定和双向数据绑定。数据绑定是指将视图中的元素绑定到模型数据的过程，当模型数据发生变化时，视图将自动更新。双向数据绑定是指同时将视图中的元素绑定到模型数据，并将模型数据绑定到视图中的元素，当视图或模型中的数据发生变化时，另一个部分将自动更新。

# Vue2

## 修改对象的状态

    > 对于已经存在的对象中存在的属性可以直接操作
    
    操作未存在的
    
    this.set("对象名","属性名","属性值)

## 修改数组的状态

    push
    
    pop
    
    shift
    
    unshift
    
    sort
    
    splice
    
    reverse

## slot<插槽>

> 可以理解为就是 react 中的 组件 children

### 具名插槽

```Vue

    <template>
        <SlotComponent>
        <template v-slot:first>
            <div>
                1
            </div>
        </template>
         <template v-slot:second>
            <div>
                2
            </div>
        </template>
    </SlotComponent>
    </template>
    接收
    <slot name="first"></slot>

```

## 组件传值

### 父传子

父组件:

```Vue
<template>
<div>
  Father
  <SonComponent :message="message"/>

</div>
</template>

<script lang="ts">
import SonComponent from './components/SonComponent.vue';
export default {
  // 局部注册的组件
  components: {
    SonComponent
  },
  // 组件状态值
  data () {
    return {
      message:"father to son"
    }
  },
  methods: {},
  mounted () {
  },
}
</script>

<style  scoped>

</style>

```

子组件:

```Vue
<template>
<div>
    <div>Son</div>
    <div>message : {{ message }}</div>
</div>
</template>

<script lang='ts'>
export default {
    props:{
        message: {
            type: String,
            required: true,
            default: ''
        }
    },
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

```

### 子传父

父组件:

```Vue
<template>
<div>
  Father
  <SonComponent :message="message" @sendToFather="sendToFather"/>

</div>
</template>

<script lang="ts">
import SonComponent from './components/SonComponent.vue';
export default {
  // 局部注册的组件
  components: {
    SonComponent
  },
  // 组件状态值
  data () {
    return {
      message:"father to son"
    }
  },
  methods: {
    sendToFather(val:string) {
      console.log('[ val ] >', val)
    }
  },
  mounted () {
  },
}
</script>

<style  scoped>

</style>
```

子组件:

```Vue
<template>
<div>
    <div>Son</div>
    <div>message : {{ message }}</div>
    <button @click="send">son to father</button>
</div>
</template>

<script lang='ts'>
export default {
    props:{
        message: {
            type: String,
            required: true,
            default: ''
        }
    },
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
    return {}
  },
  methods: {
    send () {
      this.$emit("sendToFather",'son to father')
    }
  },
  mounted () {
  },
}
</script>

<style lang='less' scoped>

</style>

```

### 非父子传值

# Vue3

## 优点

- 打包大小减少 41%

- 初次渲染快 55%, 更新渲染快 133%

- 内存减少 54%

## 创建

### 使用 vue-cli 创建

官方文档：[https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

```Plain Text
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```

### 使用 vite 创建

```Plain Text
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

## 常用 Composition API

### vue2.x 的响应式

- 实现原理：

  - 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。

    - 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。

        ```Vue
        Object.defineProperty(data, 'count', {
            get () {}, 
            set () {}
        })
        ```

- 存在问题：

    - 新增属性、删除属性, 界面不会更新。

    - 直接通过下标修改数组, 界面不会自动更新。

### Vue3.0的响应式

- 实现原理:

    - 通过Proxy（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。

    - 通过Reflect（反射）: 对源对象的属性进行操作。

    - MDN文档中描述的Proxy与Reflect：

        - Proxy：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

        - Reflect：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

            ```Vue
            new Proxy(data, {
              // 拦截读取属性值
                get (target, prop) {
                  return Reflect.get(target, prop)
                },
                // 拦截设置属性值或添加新属性
                set (target, prop, value) {
                  return Reflect.set(target, prop, value)
                },
                // 拦截删除属性
                deleteProperty (target, prop) {
                  return Reflect.deleteProperty(target, prop)
                }
            })
            ​
            proxy.name = 'tom'   
            ```
### 子组件接收参数
```javascript
// 数据
let superData = defineProps({
    play: {
        type: String,
        default: "默认值"
    },
    playA: {
        type: Array,
        required: true
    }
})
// 方法
let myEmit = defineEmits(["change-a"])
myEmit("change-a",100)
```

### Vue3.0 的响应式

- 实现原理:

  - 通过 Proxy（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。

  - 通过 Reflect（反射）: 对源对象的属性进行操作。

  - MDN 文档中描述的 Proxy 与 Reflect：

    - Proxy：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

    - Reflect：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

      ```Vue
      new Proxy(data, {
        // 拦截读取属性值
          get (target, prop) {
            return Reflect.get(target, prop)
          },
          // 拦截设置属性值或添加新属性
          set (target, prop, value) {
            return Reflect.set(target, prop, value)
          },
          // 拦截删除属性
          deleteProperty (target, prop) {
            return Reflect.deleteProperty(target, prop)
          }
      })
      ​
      proxy.name = 'tom'  
      ```

### reactive 对比 ref

- 从定义数据角度对比：

  - ref 用来定义：**基本类型数据**。

  - reactive 用来定义：**对象（或数组）类型数据**。

  - 备注：ref 也可以用来定义**对象（或数组）类型数据**, 它内部会自动通过`reactive`转为**代理对象**。

- 从原理角度对比：

  - ref 通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据劫持）。

  - reactive 通过使用**Proxy**来实现响应式（数据劫持）, 并通过**Reflect**操作**源对象**内部的数据。

- 从使用角度对比：

  - ref 定义的数据：操作数据**需要**`.value`，读取数据时模板中直接读取**不需要**`.value`。

  - reactive 定义的数据：操作数据与读取数据：**均不需要**`.value`。

### 计算属性与监视

#### computed 函数

- 与 Vue2.x 中 computed 配置功能一致

- 写法

  ```Vue
  import {computed} from 'vue'
  ​
  setup(){
      ...
    //计算属性——简写
      let fullName = computed(()=>{
          return person.firstName + '-' + person.lastName
      })
      //计算属性——完整
      let fullName = computed({
          get(){
              return person.firstName + '-' + person.lastName
          },
          set(value){
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })
  }
  ```

#### watch 函数

- 与 Vue2.x 中 watch 配置功能一致

- 两个小“坑”：

  - **监视 reactive 定义的响应式数据时：oldValue 无法正确获取、强制开启了深度监视（deep 配置失效）。**

  - 监视 reactive 定义的响应式数据中某个属性时：deep 配置有效。

  ```JavaScript
  //情况一：监视ref定义的响应式数据
  watch(sum,(newValue,oldValue)=>{
    console.log('sum变化了',newValue,oldValue)
  },{immediate:true})
  ​
  //情况二：监视多个ref定义的响应式数据
  watch([sum,msg],(newValue,oldValue)=>{
    console.log('sum或msg变化了',newValue,oldValue)
  })
  ​
  /* 情况三：监视reactive定义的响应式数据
        若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
        若watch监视的是reactive定义的响应式数据，则强制开启了深度监视
  */
  watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
  },{immediate:true,deep:false}) //此处的deep配置不再奏效
  ​
  //情况四：监视reactive定义的响应式数据中的某个属性
  watch(()=>person.job,(newValue,oldValue)=>{
    console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true})
  ​
  //情况五：监视reactive定义的响应式数据中的某些属性
  watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
    console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true})
  ​
  //特殊情况
  watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了',newValue,oldValue)
  },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
  ```

注意: watch 监视源只能是 getter/effect 函数、ref、reactive 对象或数组这些类型。

#### watchEffect 函数

- watch 的套路是：既要指明监视的属性，也要指明监视的回调。

- watchEffect 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

- watchEffect 有点像 computed：

  - 但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值。

  - 而 watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值。

  ```Vue
  //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.age
      console.log('watchEffect配置的回调执行了')
  })
  ```

### toRef

- 作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性。

- 语法：`const name = toRef(person,'name')`

- 应用: 要将响应式对象中的某个属性单独提供给外部使用时。

- 扩展：`toRefs` 与`toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`

### shallowReactive 与 shallowRef

- shallowReactive：只处理对象最外层属性的响应式（浅响应式）。

- shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。

- 什么时候使用?

  - 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。

  - 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。

### readonly 与 shallowReadonly

- readonly: 让一个响应式数据变为只读的（深只读）。

- shallowReadonly：让一个响应式数据变为只读的（浅只读）。

- 应用场景: 不希望数据被修改时。

### toRaw 与 markRaw

- toRaw：

  - 作用：将一个由`reactive`生成的**响应式对象**转为**普通对象**。

  - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。

  - 注: 对 ref 使用时, `ref(xxx) === toRaw(ref(xxx))`

- markRaw：

  - 作用：标记一个对象，使其永远不会再成为响应式对象。

  - 应用场景:

    1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。

    2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

### customRef

- 作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。

- 实现防抖效果：

```JavaScript
    <template>
      <input type="text" v-model="keyword">
      <h3>{{keyword}}</h3>
    </template>
    ​
    <script>
      import {ref,customRef} from 'vue'
      export default {
        name:'Demo',
        setup(){
          // let keyword = ref('hello') //使用Vue准备好的内置ref
          //自定义一个myRef
          function myRef(value,delay){
            let timer
            //通过customRef去实现自定义
            return customRef((track,trigger)=>{
              return{
                get(){
                  track() //告诉Vue这个value值是需要被“追踪”的
                  return value
                },
                set(newValue){
                  clearTimeout(timer)
                  timer = setTimeout(()=>{
                    value = newValue
                    trigger() //告诉Vue去更新界面
                  },delay)
                }
              }
            })
          }
          let keyword = myRef('hello',500) //使用程序员自定义的ref
          return {
            keyword
          }
        }
      }
    </script>
```

### provide 与 inject

- 作用：实现**祖与后代组件间**通信

- 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据

- 具体写法：

  1. 祖组件中：

     ```JavaScript
     setup(){
       ......
         let car = reactive({name:'奔驰',price:'40万'})
         provide('car',car)
         ......
     }
     ```

  1. 后代组件中：

     ```JavaScript
     setup(props,context){
       ......
         const car = inject('car')
         return {car}
       ......
     }
     ```

### 响应式数据的判断

- isRef: 检查一个值是否为一个 ref 对象

- isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理

- isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理

- isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

## Vuex

### @4

[https://vuex.vuejs.org/guide/](https://vuex.vuejs.org/guide/)

简单的使用 -- 创建

```Plain Text
    import { createApp } from 'vue'
    import { createStore } from 'vuex'

    // 创建一个新的 store 实例
    const store = createStore({
      state () {
        return {
          count: 0
        }
      },
      mutations: {
        increment (state,val) {
          state.count++
        }
      }
    })

    const app = createApp({ /* 根组件 */ })

    // 将 store 实例作为插件安装
    app.use(store)
```

现在，你可以通过 `store.state` 来获取状态对象，并通过 `store.commit` 方法触发状态变更：

```Plain Text
    import {useStore} from "vuex"
    const store = useStore()
        <button @click="store.commit('increment')">vuex increment</button>


    store.commit('increment',"xxxx")

    console.log(store.state.count) // -> 1
```

在 Vue 组件中， 可以通过 `this.$store` 访问 store 实例。现在我们可以从组件的方法提交一个变更：

```JavaScript
    methods: {
      increment() {
        this.$store.commit('increment')
        console.log(this.$store.state.count)
      }
    }
```

### 增加模块的概念

单个:

```Plain Text
    // 用户
    export default {
      // 开启命名空间
      namespaced: true,
      state: {
        info: {
          uname: 'Leo',
          age: 21
        }
      },
      mutations: {
        updateUname(state, val) {
          state.info.uname = val
        },
        updateAge(state, val) {
          state.info.age = val
        }
      },
      actions: {
        asyncUpdate(store, val) {
          setTimeout(() => {
            store.commit('updateAge', val)
          }, 2000)
        }
      },
      getters: {
        format(state) {
          return state.info.uname + ',nice to meet you~'
        }
      }
    }


```

整合:

```Plain Text
    import { createStore } from 'vuex'

    import global from './modules/global.js'
    import user from './modules/user.js'

    export default createStore({
      // 公共模板直接在这里展开就可以
      ...global,
      modules: {
        user
      }
    })


```

## Pinia

### vue3

    安装

````Vue
    import { createApp } from 'vue'
    import { createPinia } from 'pinia'
    import App from './App.vue'

    const pinia = createPinia()
    const app = createApp(App)

    app.use(pinia)
    app.mount('#app')
    ```

    Option Store

    ```TypeScript
    export const useCounterStore = defineStore('counter', {
      state: () => ({ count: 0 }),
      getters: {
        double: (state) => state.count * 2,
      },
      actions: {
        increment() {
          this.count++
        },
      },
    })
````

Setup Store

```TypeScript
    export const useCounterStore = defineStore('counter', () => {
      const count = ref(0)
      function increment() {
        count.value++
      }

      return { count, increment }
    })
```

数据的使用

```TypeScript
    import usexxx from ""

    const xxx = usexxx()

    //使用
    xxx.yyy

    //

```

重置 state

```TypeScript
    const store = useStore()

    store.$reset()
```

storeToRefs -- 解决结构丢失响应式

#### pinia 持久化

[https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/)

安装

```Plain Text
    yarn add pinia-plugin-persistedstate

    import { createPinia } from 'pinia'
    import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)

```

使用

```Plain Text
    import { defineStore } from 'pinia'

    export const useStore = defineStore(
      'main',
      () => {
        const someState = ref('你好 pinia')
        return { someState }
      },
      {
        persist: true,
        key:"xxxx"
      }
    )
```

### vue2

安装

```TypeScript
    import { createPinia, PiniaVuePlugin } from 'pinia'

    Vue.use(PiniaVuePlugin)
    const pinia = createPinia()

    new Vue({
      el: '#app',
      // 其他配置...
      // ...
      // 请注意，同一个`pinia'实例
      // 可以在同一个页面的多个 Vue 应用中使用。
      pinia,
    })
```

## vue-router

### Vue2

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import { hasVisitPermission, isWhiteList } from './permission'

// 注册路由组件
Vue.use(VueRouter)

// 创建路由： 每一个路由规则都是一个对象
const routers =[
  // path 路由的地址
  // component 路由的所展示的组件
  {
      path: '/',
      // 当访问 '/'的时候 路由重定向 到新的地址 '/home'
      redirect: '/home',
  },     
  {
      path: '/home',
      component: home,
  },
  {
      path: '/login',
      component: login,
  },
],

// 实例化 VueRouter 路由
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routers
})

// 路由守卫
router.beforeEach(async (to, from, next) => {
  // 清除面包屑导航数据
  store.commit('common/SET_BREAD_NAV', [])
  // 是否白名单
  if (isWhiteList(to)) {
    next()
  } else {
    // 未登录,先登录
    try {
      if (!store.state.user.userInfo) {
        await store.dispatch('user/getUserInfo')
      }

      // 登录后判断，是否有访问页面的权限
      if (!hasVisitPermission(to, store.state.user.userInfo)) {
        next({ path: '/404' })
      } else {
        next()
      }
    } catch (err) {
      $error(err)
    }
  }
})

export default router


```

在 Vue实例上注册

```javascript
import router from './router'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
```

### Vue3

安装

```Plain Text
    yarn add vue-router@4 // 适用于 vue3
```

使用

```TypeScript

    //1. 导入相关的 API
    import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router

    // 2. 定义路由组件.
    // 也可以从其他文件导入
    const routes:Array<RouterRecordRaw> = [
      {
        path:"/ddd/:id",
        name:"Home",
        component:()=>import('xxxx'),
        children:[

        ]
      }
    ]

    // 3. 创建路由实例并传递 `routes` 配置
    // 你可以在这里输入更多的配置，但我们在这里
    // 暂时保持简单


    // vue2 mode history vue3 createWebHistory
    // history
    //
    window.addEventListener('popstate',()=>{})
    // vue2 mode hash vue3 createWebHasHistory // 路径会多一个#/
    // location.hash
    //window.addEventListener('hashchange',()=> {})
    const router = createRouter({
      history:createWebbbHistory(),
      routes
    })




    // 4. 创建并挂载根实例
    const app = Vue.createApp({})
    //确保 _use_ 路由实例使
    //整个应用支持路由。
    app.use(router)

    app.mount('#app')

    // 现在，应用已经启动了！

    // 5. 展示
    <router-view></router-view>

    // 6. 跳转
    // 组件跳转
    <router-link replace to=''>
    //replace 不保留历史记录
    <router-link :to='{name:"Home"}'>
    // 编程式跳转
    //useRoute 取参数
    import { useRouter,useRoute} from "vue-router"
    const router = useRouter()
    router.push('')
    router.push({
      name:"",
      query:"",
      params:""
    })
    router.replace('')
    router.go(1)
    router.back()
    //取参
    const route = useRoute()
    route.query.
    route.params.
```

全局前置守卫

```Plain Text
    router.beforeEach((to,from,next)=>{
    to.path
    })

    router.afterEach((to,from)=>{
    to.path
    })
```

## 其他使用方法

1. 组件导出方法

2. defineExpose

   ```Plain Text
   import xx form "" //引入子组件
   const Vnode = createVNdoe(loadingBar)
   //挂在组件
   render(Vnode,document.body)
   
   Vnode.component?.exposed.xxx
   ```
