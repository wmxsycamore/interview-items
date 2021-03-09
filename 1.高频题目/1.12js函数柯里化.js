function curry(fn, args) {
//    fn.length获取参数的个数
//    arguments 获取传入的参数列表（类数组） 
    var length = fn.length;
    var args = args || [];
    return function() {
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if(newArgs.length < length) {
            return curry.call(this, fn, newArgs);
        } else {
            return fn.apply(this.newArgs)
        }
    }
}

// es6写法
const curry = (fn, arr = []) => (...args) => (
    args => args.length === fn.length
        ? fn(...args)
        : curry(fn, args)
)([...arr, ...args])


// 题目1： add(1,2,3,4), add(1,2,3)(4), add(1)(2)(3)(4)结果相同

function add(a, b, c, d) {
    return a+b+c+d;
}

let curryTest = curry(add);

curryTest(1,2,3,4)
curryTest(1,2,3)(4)
curryTest(1,2)(3,4)

