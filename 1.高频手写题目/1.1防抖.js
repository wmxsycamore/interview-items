// 适用情况： 多次点击提交按钮
const debounce = function(func, wait = 50) {
  let timer = 0;
  return (...params) =>{
    if(timer) clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(this, params);
    }, wait);
  }
}
function fn(a,b,c) {
  console.log(a+b+c)
}
debounce(fn)(1,2,3)