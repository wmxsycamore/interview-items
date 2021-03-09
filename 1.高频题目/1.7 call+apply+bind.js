Function.prototype.mycall = function(context, args) {
    context.fn = this;
    let args = [];
    context.fn(...args);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.myApply = function(context = window, ...args) {
    let fn = Symbol("fn");
    context[fn] = this;
    let result = context[fn](...args);
    delete context[fn];
    return result;
}

Function.prototype.myBind = function(context = window, ...args) {
    if(typeof this !== 'function') {
        throw new TypeError('error')
    }
    const _this = this;
    const arr = [...args].slice(1);
    return function F() {
        if(this instanceof F){
            return new _this(...arr, ...args,)
        }
        return _this.apply(context, arr.concat(...args))
    }
}