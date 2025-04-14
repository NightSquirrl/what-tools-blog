https://sunfei123456.github.io/Blogs/VueStudy/Vue.js%20%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0.html
https://segmentfault.com/a/1190000044147982
https://vue3js.cn/reactivity/reactive.html
https://vue3js.cn/vue-composition-api/#reactive


redux :https://juejin.cn/post/6977992027459813407


多前端笔记:https://lq782655835.github.io/blogs/vue/vue3-code-2.reactive.html


定义: 接收一个普通对象然后返回该普通对象的响应式代理。

```javascript
const obj = reactive({ count: 0 })
```

响应式转换是“深层的”：会影响对象内部所有嵌套的属性。基于 `ES2015` 的 `Proxy` 实现，返回的代理对象不等于原始对象。

## 提要

> 1. 如果目标对象是一个只读的响应数据,则直接返回目标对象
>
>     1. ```javascript
>         let objReadonly = readonly(obj)
>         // 传给reactive方法的参数已被readonly处理过
>         let state = reactive(objReadonly) 
>         ```
> 2. 是否是对象,不是对象返回目标
> 3. 目标已经是一个proxy,直接返回目标
> 4. 目标是否可以被观察
>
>     1. 没有搭上__v_skip标记
>     2. 是可以观察的值的类型
>     3. 没有被frozen
> 5. 代理

### 代码

```javascript
export function reactive(target: object) {
  // 否则调用  createReactiveObject 创建 observe
  return createReactiveObject(
    target, 
    false,
    mutableHandlers,
    mutableCollectionHandlers
  )
}


// Target 目标对象
// isReadonly 是否只读 
// baseHandlers 基本类型的 handlers
// collectionHandlers 主要针对(set、map、weakSet、weakMap)的 handlers
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>
) {
  // 如果不是对象
  if (!isObject(target)) {
    // 在开发模式抛出警告，生产环境直接返回目标对象
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }

  // 如果目标对象已经是个 proxy 直接返回
  if (target.__v_raw && !(isReadonly && target.__v_isReactive)) {
    return target
  }

  // 检查目标对象是否能被观察, 不能直接返回
  if (!canObserve(target)) {
    return target
  }

  // 使用 Proxy 创建 observe 
  const observed = new Proxy(
    target,
    baseHandlers
  )

 // 打上相应标记
  def(
    target,
    isReadonly ? ReactiveFlags.readonly : ReactiveFlags.reactive,
    observed
  )

  return observed
}

// 同时满足3个条即为可以观察的目标对象
// 1. 没有打上__v_skip标记
// 2. 是可以观察的值类型
// 3. 没有被frozen
const canObserve = (value: Target): boolean => {
  return (
    !value.__v_skip &&
    isObservableType(toRawType(value)) &&
    !Object.isFrozen(value)
  )
}

// 可以被观察的值类型
const isObservableType = /*#__PURE__*/ makeMap(
  'Object,Array,Map,Set,WeakMap,WeakSet'
)
```




https://www.yuque.com/xiumubai/doc



https://juejin.cn/post/6999922290628509732



https://juejin.cn/post/7077102548640858125


https://typescript.p6p.net/typescript-tutorial/tsconfig.json.html

