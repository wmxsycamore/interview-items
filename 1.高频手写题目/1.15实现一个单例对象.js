// 一个对象只有一个实例。
// 运用的方法：new Proxy 和闭包
// Reflect.construct(target, argumentsList[, newTarget])对构造函数进行 new 操作，相当于执行 new target(...args)。
function proxy(func) {
    let instance;
    let handler = {
        constructor(target, args) {
            if(!instance) {
                instance = Reflect.constructor(func, args);
            }
            return instance;
        }
    }
    return new Proxy (func, handler);
}
