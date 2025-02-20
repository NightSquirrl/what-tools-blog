---
title: 🦋 4-Stage 状态管理
tag:
  - harmony
star: true
---

## @State基本使用方法

```ts
@State test:Array<string> = ["",""]

// 添加
this.test.push("xxx")
```



### 注意事项

1. 普通的对象是可以进行页面的相应的
2. 嵌套的对象无法进行相应
3. 数组对象,修改对象的数据无法相应
   1. 对应的解决方法 覆盖需要修改的数据 ==不推荐==

## @Prop @Link 的基本使用

> @Prop 单向的数据同步
>
> ​	子组件修改数据,无法进行相应
>
> ​	支持的数据类型
>
> ​		number string boolean enum
>
> @Link 双向数据同步
>
> ​	支持的数据类型
>
> ​		number string boolean enum object class array

>  父组件

```ts
//@Prop 案例
@Entry
@Component
struct Father {
	@State testState = ''
  
  
build() {
// 调用子组件
  Son({testState:this.testState}) // 将值传递过去

}
}


//@Link 案例
@Entry
@Component
struct Father {
	@State testState = ''
  
  
build() {
// 调用子组件
  Son({testState:$testState}) // 将引用传递过去

}
}
```



> 子组件

```ts
//@Prop
@Component
struct Son {
@Prop testState
  
build(){
  
	}
}


//@Link
@Component
struct Son {
@Link testState
  
build(){
  
	}
}
```



## @Observed @ObjectLink 的基本使用以及方法的传递

用于涉及嵌套对象和数组元素为对象的场景中的双向数据同步

```ts
//对象的定义
@Observed
class Person {
  name:string;
  age:number;
  son:Persion;
  constructor(name:string,age:number,son?:Person) {
    this.name = name;
    this.age = age;
    this.son = son;
  }
  
}


// 父组件
@Entry
@Component
struct Father {
  @State p:Person = new Person("test",18,new Person("testson",2))
  
  testFuncton() {
  xxxx
  }
  
  build(){
    // 设置 testFunction 函数调用的 this 使用时父组件的 this
  	Son({p:this.p,onTestFunction:this.testFunction.bind(this)})
  }
}


// 子组件
@Component
struct Son{
  @ObjectLink p:Person
  onTestFunction:()=>void
  build() {
    
  }
}
```

