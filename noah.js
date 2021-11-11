function getSuffix(arr) {
    arr = Array.from(new Set(...arr));
    arr.sort();
    if (arr.length === 0) {
        return;
    } else if(arr.length === 1)  {
        return arr[0]
    } else {

        let first = arr[1] - arr[0];
        let temp = first.toString().match(/0+$/);
        let result = temp[0];
        arr.reduce((pre, cur) => {
            temp = cur - first;

        }, first)
        
        for(let i =1; i< arr.length; i++) {

            temp = (arr[i] - first)
            let minus = temp.toString().match(/0+$/);
            if(minus) {
                result = temp.slice(minus["index"])
            } else {
                return
            }
            
        }
    }
    
}
// 比较两个字符串最大的相同后缀
function comNUm(a, b) {
    const aArr =  ('' + a).split();
    const bArr =  ('' + b).split();
    const max = Math.max(aArr.length, bArr.length);
    for
}
arr.reduce((pre, cur) => {

}, "")


// 第二题
function fn(arr) {
    let res = 0;
    let len = arr.length;
    while(res < len) {
        if(arr[res] === res +1) {
            res++;
        }else if(arr[res] <= res || arr[res] > len || arr[res] === arr[arr[res] -1]) {
            arr[res] = arr[--len];
        }else {
            let temp = arr[res];
            arr[res] = arr[arr[res] -1];
            arr[arr[res] -1] = temp;
        }
    }
    return res + 1;
}