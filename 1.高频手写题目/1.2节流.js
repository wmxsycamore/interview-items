  // 适用情况
// 1. 拖拽
// 2. window的resize
// 3. js动画
// 与防抖的比较：相同点都是减少函数的执行次数，不同点是防抖会将多次操作变成一次，二节流会间隔固定时间循环执行函数
const throtle = function name(func, wait = 50) {
  let lastTime = 0;
  return function (...params) {
    let now = +new Date();
    if(now - lastTime > wait) {
      lastTime = now;
      func.apply(this, params);
    }
  }
}
setInterval(
  throtle(() =>{
    console.log(1)
  }, 500),
);