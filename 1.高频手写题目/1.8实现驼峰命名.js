var str = "get-element-by-id";
const f = function(str) {
    return str.replace(/-\w/g, (x) => {
        return x.slice(1).toUpperCase();
    })
}