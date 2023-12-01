---
title: Javascript面试
tag:
  - 面试
---

## 数据类型

### 数据类型检测的方式有哪些

**（1）typeof**

**（2）instanceof**

`instanceof`可以正确判断对象的类型，**其内部运行机制是判断在其原型链中能否找到该类型的原型**。

**（3） constructor**

`constructor`有两个作用，一是判断数据的类型，二是对象实例通过 `constrcutor` 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，`constructor`就不能用来判断数据类型了：

**（4）Object.prototype.toString.call()**

### 判断数组的方式有哪些

- 通过Object.prototype.toString.call()做判断

- 通过原型链做判断
  - `obj.__proto__ === Array.prototype;`

- 通过ES6的Array.isArray()做判断
- 通过instanceof做判断
- 通过Array.prototype.isPrototypeOf
