// flat()是es10新增的数组方法
// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// 数组的flat就是将多维数组变成一维数组

// 方式1：直接适用flat方法
let arr = arr.flat(Infinity);

// 方式2：正则
let str = JSON.stringify(arr);
str = str.replace(/(\[|\])/g, '')
// 将str变成数组 
let ary = str.split(",");
// 或者先给str加上中括号，再用JSON.parse()
str = '[' +str +']';
let ary = JSON.parse(str);


// 方式3：深层遍历,递归处理
function deep(arr) {
  let result = []
  for(let i = 0, len = arr.length; i< len; i++) {
    if(Array.isArray(arr[i])) {
      deep(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return result;
}

// 方式4：用reduce,也要用递归
function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(
      Array.isArray(cur) ? flatten(cur): cur
    )
  }, [])
}

// 方式5：拓展运算符
while(arr.some(Array.isArray)) {
  arr = [].concat(...arr)
}

// 将对象扁平化
// obj = {a: {b: {c: 1, d: 2}}, e: 3, f: {g: 4}}
function objectFlatten(obj) {
  const res = {};
  function flat(item, preKey = '') {
    // [key, val]用于获取数组中的0，1位置的元素
    Object.entrirs(item).forEach(([key, val]) => {
      const newKey = preKey? `${preKey}.${key}`:key;
      if(val && typeof val === 'object') {
        flat(val, newKey)
      } else {
        res[newKey] = val;
      }
    });
  }
  flat(onj);
  return res;
}