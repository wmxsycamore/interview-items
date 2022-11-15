// 需求理解：compose组合函数，实现将前一个函数的输出作为后一个函数的输入，最后执行结果。
 
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11


/**
 * a(1) 等同于fn1(fn2(fn3(fn4(1))))
 * 获取compose(fn1, fn2, fn3, fn4)(1)
 * 可以看出：
 * ① compose应该返回一个函数；
 * ② 返回函数的参数传入给compose函数的最后一个参数（即最后一个fn）
 * ③ compose函数的参数从左至右开始变成从外至内
 */

function compose(...fns) {
  if(!fns.length) return v => v;
  if(fns.length === 1) return fns[0]
  // 知识点：
  return fns.reduce( (pre, cur) => 
    {
      return (...args) => pre(cur(...args))
    }
  )

}