const data = {
  text: "default"
}
const input = document.querySelector("#input");
const span = document.getElementById("span");
// 数据劫持
Object.defineProperty(data, 'text', {
  // 数据变化 =》 视图变化
  set(newVal) {
    input.value = newVal;
    span.innerHTML = newVal;
  }
});
// 视图变化 =》 数据变化
input.addEventListener("keyup", e=>{
  data.text = e.target.value;
})

// proxy版本
const data = {
  text: "default"
}
const input = document.querySelector("#input");
const span = document.getElementById("span");
// 数据劫持
const handler = {
  set(target, key, value) {
    target[key] = value;
     // 数据变化 =》 视图变化
    input.value = value;
    span.innerHTML = value;
    return value;
  }
}
const proxy = new Proxy(data, handler);
// 视图变化 =》 数据变化
input.addEventListener("keyup", e=>{
  proxy.text = e.target.value;
})