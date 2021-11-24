// 场景 

import { set } from "../vue/src/core/observer"

// 有a、b、c三个异步任务，要求必须先执行a，再执行b，最后执行c 
// 且下一次任务必须要拿到上一次任务执行的结果，才能做操作 

// 思路 

// 我们需要实现一个队列，将这些异步函数添加进队列并且管理它们的执行，
// 队列具有First In First Out的特性，也就是先添加 进去的会被先执行，
// 接着才会执行下一个(注意跟栈作区别) 
// 大家也可以类比一下jQuery的animate方法，添加多个动画也会按顺序执行

// 模拟3个异步函数

const a = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('a')
    }, 1000);
  })
}
const b = (data) => {
  return new Promise ((resolve, reject) => {
    resolve(data + 'b')
  })
}
const c = (data) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(data + 'c')
    }, 1000);
  })
}

// 方法1： 利用promise的then的链式操作
a().then(data => {
  return b(data)
}).then(data => {
  return c(data)
}).then(data => {
  console.log(data); // 输出abc
})

// 方法二
function quene(arr) {
  arr.forEach(Promise => {
    
  });
  
}