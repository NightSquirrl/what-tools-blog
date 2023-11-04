---
sticky: 2
title: 🤕 Vue 与 JSX 笔记
tag:
  - Vue
  - 前端
top: 100
sidebar: true
---

# 介绍 JSX
> JSX是一种Javascript的语法扩展，JSX = Javascript + XML，即在Javascript里面写XML，因为JSX的这个特性，所以他即具备了Javascript的灵活性，同时又兼具html的语义化和直观性。
## 安装
### vite
```shell
npm install @vitejs/plugin-vue-jsx -D

```
然后在 vite.config.js 文件中添加以下配置：

```javascript
// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx'

export default {
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
}

```
### webpack
```shell
npm install @vitejs/plugin-vue-jsx -D

```
在 babel 的配置文件中添加：
```javascript
{
  "plugins": ["@vue/babel-plugin-jsx"]
}

```

## JSX 在 Vue中的使用
### 简单的使用
在`.vue`结尾的文件中使用
```vue
<script>
  import {ref} from "vue"
  export  default  {
      setup() {
          const count = ref(1)
            const render = ()=> {
              return <div>demo component</div>
            }
            return render
      }
  }
</script>
```
## 在 JSX 中使用
`.jsx`
```javascript
import {defineComponent,ref} from "vue"

export default defineComponent(()=> {
    const count = ref(1)
    const render = ()=> {
        return <div>demo</div>
    }
    return render
})
```
或
```javascript
import {defineComponent,ref} from "vue"

export default defineComponent({
    props:{
      name:{
          type:String
      }  
    },
    setup(props) {
        const count = ref(1)
        const render = ()=> {
            return <div>{props.name}demo</div>
        }
        return render
    }
})
```

