/**
 * 1.手写promise：
 * 2.手写promise.all
 * 3.promise的静态方法
 * 4.如何让promise.all按顺序执行
 */

class MyPromise {
  // 状态state,成功函数，失败函数,resolve,和rejected
  constructor() {
    this.state = 'Pending';
    this.successFun = [];
    this.failFun = [];


  }
}