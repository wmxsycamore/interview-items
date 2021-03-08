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