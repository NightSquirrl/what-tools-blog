<template>
  <form @submit="formOnSubmit">
    <input type="text" name="name" placeholder="请输入姓名"/>
    <input type="number" name="age" placeholder="请输入年龄"/>
    <input type="email" name="email" placeholder="请输入邮箱"/>
    <br/>
    <button type="submit">submit</button>
    <br/>
    <button type="reset">use type equal reset</button>
    <br/>
    <button type="button" @click="resetForm">use click event</button>
  </form>
</template>

<script setup lang="ts">
const formOnSubmit = (event)=> {
  event.preventDefault();//阻止默认事件,否则会触发表单的默认提交事件
  const formData = new FormData(event.target);
  // 取出 formData 中的数据
  const name = formData.get('name'); // 输入的值来自于 input 属性 name
  const age = formData.get('age');
  const email = formData.get('email');
  console.log(name, age, email);
  // 或者转换为对象
  console.log(Object.fromEntries(formData));
}

const resetForm = ()=> {
  // 获取到 form 的 dom 调用 reset()方法即可
  const form = document.querySelector('form');
  form.reset();
}
</script>

<style scoped>
button {
  padding: 5px 10px;
  background: bisque;
  color: #fff;
  border-radius: 10px;
  margin: 5px;
}
</style>
