// 适用情况： 多次点击提交按钮
const debounce = function(func, wait = 50) {
  let timer = 0;
  return function (...params) {
    if(timer) clearInterval(timer);
    setTimeout(() => {
      func.apply(this, params);
    }, wait);
  }
}