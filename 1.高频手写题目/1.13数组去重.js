const arr = [1,2,2,3,2,3,5,4,6,5,7];
// 方法1：双层循环
function distinct(arr) {
  for(let i = 0, len = arr.lenght; i< len; i++) {
    for(let j = i+1; j< len; j++) {
      if(arr[i] == arr[j]) {
        arr.splice(j, 1);
        len --;
        j--;
      }
    }
  }
  return arr;
}

// filter
let arr1 = arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
//  let arr1 = arr.filter((item, index) => arr.indexOf(item) === index)

// 方法3：new Set
// let arr2 = [...new Set(arr)]
let arr2 = Array.from(new Set(arr))

// 方法4：，reduce,
// includes 可以换成indexof
arr.reduce((pre, cur) => {
  if(!pre.includes(cur)) {
    pre.push(cur)
  }
}, [])