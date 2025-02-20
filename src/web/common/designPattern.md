---
title: 🕹️ 19 种设计模式
tag:
  - 设计模式
  - 前端
---



## 1. 构造器模式

```js
function Employee(name,age) {
  this.name = name
  this.age = age
  
  this.say = function() {
    console.log(this.name + "=" + ,this.age)
  }
}

let employee1 = new Employee("name",20)
```

## 2. 原型模式

```js
function Employee(name,age) {
  this.name = name
  this.age = age
  

}

Employee.prototype.say = function() {
    this.say = function() {
    console.log(this.name + "=" + ,this.age)
  }
}

let employee1 = new Employee("name",20)
```

### 类

```js
class Emplyee {
  constructor(name,age) {
    this.name = name;
    this.age = age
  }
  
  say() {
    console.log() 
  }
}


let employee1 = new Employee("name",100)
```

## 3. 工厂模式

```js
function UserFactory(role) {
  switch(role) {
    case "":
      break;
  }
}

```

## 4. 抽象工厂

```js
class User {
  constructor(name,role,pages) {
    this.name = name;
    this.role = role;
    this.pages = pages;
  }
  
  welcome() {
    
  }
  
  dataShow() {
    
  }
}


class SuperAdmin extends User {
  constructor(name,role,pages) {
   super(name,"superadmin",[])
  }
  
  dataShow() {
    
  }
  
  addRight() {
    
  }
}


function UserFactory(role) {
  switch(role) {
    case "":
      break;
  }
}

```

## 5. 建造者模式

```js
class A {
  init() {
    
  }
  
  
  getData() {
    
    
  }

   render() {
     
   }
}

class B {
  init() {
    
  }
  
  
  getData() {
    
    
  }

   render() {
     
   }
}


class Creator {
  startBuild(builder) {
    builder.init()
    builder.getData()
    builder.render()
  }
}

const op = new Creator()
op.startBuild(new A())
op.startBuild(new B())
```

## 6. 单例模式

> 保证一个类只有一个实例

> 闭包的方式

```js
ler Singleton = (function() {
  // 闭包,变量不会被回收
  let instance;
  
  function User(name,age) {
    this.name = name;
    this.age = age;
  }
  
  return function(name,age) {
    if(!instance) {
//      创建实例
      instance = new User(name,age)
    }
    return instance
  }
})()
```

> ES6

```js
class Singleton {
  constructor(name,age) {
    if(!Singleton.instance) {
      this.name = name
      this.age = age
      Singleton.instance = this
    }
  }
}
```

## 7. 装饰器模式

```js
Funciton.prototype.before = funciton(beforeFn) {
  let _this = this
  return function() {
    beforeFn.apply(this,arguments)
    
    return _this.aooly(this,arguments)
  }
}

Funciton.prototype.after = funciton(beforeFn) {
  let _this = this
  return function() {
    let result = _this.aooly(this,arguments)
    beforeFn.apply(this,arguments)
    
    return result
  }
}

function test() {
  console.log("")
}

let test1 = test.before(function() {
  console.log(111)
}).after



```

## 8. 适配器模式

```js
class A {
  show() {
    
  }
}

class B {
  display() {
    
  }
}

class C  extends A{
  constructor() {
    super()
  }
  display() {
    this.show()
  }
}
```

## 9. 策略模式

```js
let strategry = {
  "a":(t)=> {
    
  },
  "b":(t)=> {
    
  }
  ...
}

function C(t1,t2) {
  return strategry[t1](t2)
}

```

## 10. 代理模式

```js
class star {
  play() {
    
  }
}

class starProxy{
  constructor() {
    this.superStar = new Star()
  }
  
  talk(price) {
    if(price >=1000) {
      this.superStar.play()
    } else {
      log()
    }
  }
}
```

````js

let star = {
  name"",
  workprice:100
}

let proxy = new Proxy(star,{
  get(target,key) {
    log()
  },
  set(target,key,value) {
    log()
  }
})


proxy.workprice   会触发 proxy 的 get

proxy.workprice = 20000
````

## 11. 观察者模式

```js
class Subject {
  constructor() {
  	this.observers = []
  }
  
  add(observer) {
    this.observers.push(observer)
  }
  remove(observe) {
    this.observers = this.observers.filter(item=>item!==observer)
  }
  notify() {
    this.observers.forEach(item=> {
      item.update()
    })
  }
}

class Observer {
  update() {
    log
  }
}



const subject = new Subject()
const obrerver1 = new Observer()
const observer2 = new Observer()

subject.add(obrerver1)
subject.add(observer2)
```

## 12. 发布订阅模式

```js
const PubSub = {
  list:[],
  publish() {
    this.list.forEach(item=>item())
  },
  subscribe(cb) {
    this.list.push(cb)
  }
}

function a() {
  
}

function b() {
  
}

PubSub.subscribe(testA)
PubSub.subscribe(testB)
```

> v2

```js
const PubSub = {
  message:{},
  publish(type) {
    if(!this.message[type]) return
    
    this.message[type].forEach(item=>item())
  },
  unsubscribe(type,cb) {
     if(!this.message[type]) return
    if(!cb) {
      this.message[type] = []
    } else {
      this.message[type] = this.messagte[type].fliter(item=>item!==cb )
    }
  },
  subscribe(type,cb) {
    if(!this.message[type]) {
      this.message[type] = [cb]
    } else {
      this.message[type].push(cb)
    }
  }
}

function a() {
  
}

function b() {
  
}

PubSub.subscribe("A",mtestA)
PubSub.subscribe(testB)
```

## 13. 模块化模式

作用域,变量保护

> 闭包

```js
const obj = (function() {
  let count = 0;
  return {
    increase() {
      return ++ count
    },
    decrease() {
      return --count
    }
  }
})()


```

## 14. 桥接模式

> 将抽象部分与他的实现部分分离

```js
function A(engine) {
  this.engine = engine
}

A.prototype.platform = function() {
  log
}
A.prototype.loadEngine = function() {
  this.engine.run()
}

function test() {
  this.run = function() {
    log
  }
}
```

## 15. 组合模式

> 对象树形结构

```js
const folder = function(folder) {
  this.folder = folder
  this.list = []
}

folder.prototype.add = function(res) {
  this.list.push(res)
}

folder.prototype.scan = function()  {
	for(let i = 0;i<this.list.length;i++) {
    this.list[i].scan()
  }
}



Let rootFolder new Folder("root")
Let htmlFolder new Folder("html")
Let cssFolder=new Folder("css")
Let jsFolder = new Folder("js")
rootFolder.add(htmlFolder)
rootFolder.add(cssFolder)
rootFolder.add(jsFolder)
```

## 16. 命令模式

```js
class Receiver {
  // 接收
  execute() {
    log
  }
}

class Command {
  constructor(receiver) {
    this.receiver = receiver
  }
  execute() {
    log
    this.receiver.execute()
  }
}

class Invoker {
  // 发布
  constructor(command) {
    this.command = command
  }
  
  order() {
    log
    this.command.execute()
  }
}

const order = new Command(new Receiver())
const client = new Invoker(order)

client.order()
```

## 17. 模版方法模式

> 父类定义抽象方法,子类实现具体的方法

```js
let container = function(params) {
  let f = function() {}

F.prototype.init = function() {
  this.getData()
  this.render()
}
F.prototype.init = function() {
  log
}
  F.prototype.render = params.getData ||  function() {
   throw new Error("必须传入")
  }

}


Container({
  getDatta() {},
  
  
})
```

## 18. 迭代器模式

> 迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器準式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。

```js
let each = function(arr,callback) {
  for(let i = 0; i<arr.length;i++) {
    callback(i,arr[i])
  }
}

each([1,2,3,4,5,],function(key,value) {
  log
})

// es6 Iterator
//Array map set string arguments NodeList

let obj = {
  0:"SD",
  1:"22"
  lenght:2,
  [Symbol.iterator]:Array.prototype[Symbol.iterator]
}
for(let i of obj) {}





let obj = {
  code:200,
  name:"Kerwin",
  list:["","",""],
  [Symbol.iterator]:function() {
    let index = 0;
    return {
      next:()=> {
        if(index < this.list.lenght) {
          return {
            value:this.list[index++],
            done:false
          }
        } else {
          return {
            value:undefined,
            done:true
          }
        }
      }
    }
  }
}


let it = obj[Symblo.iterator]()

for of

```

## 19. 职责链模式

```js
function f1() {
  
}

function f2() {
  
}


function f3() {
  
}

class Chain {
  constructor(fn) {
    this.checkRule = fn
    this.nextRule = null
  }
  
  add(fn) {
        this.nextRule = fn
  }
  
  check() {
    this.checkRule() === "next" ? this.nextRule.check()
  }
}


let checks = new Chain(f1)
let cf2 = new Chain(f2)
let cf3 = new Chain(f3)
checks.addRule(cf2)
checks.addRule(cf3)
checks.addRule({
  check:()=>"end"
})

checks.check()
  
```

> 改造

```js
function f1() {
  
}

function f2() {
  
}


function f3() {
  
}

class Chain {
  constructor(fn) {
    this.checkRule = fn
    this.nextRule = null
  }
  
  add(fn) {
        this.nextRule = new Chain(fn)
    return this.nestRule
  }
  
  check() {
    this.checkRule() === "next" ? this.nextRule.check()
  }
}


let checks = new Chain(f1)
checks.addRule(f2).addRule(f3)

checks.addRule({
  check:()=>"end"
})

checks.check()
  
```























