const debounce = function(func, wait = 50) {
  let timer = 0;
  return function (...params) {
    if(timer) clearInterval(timer);
    setTimeout(() => {
      func.apply(this, params);
    }, wait);
  }
}