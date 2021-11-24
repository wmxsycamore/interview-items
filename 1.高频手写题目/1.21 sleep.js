// 方法1
function sleep(timeout) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}
// 使用
async main() {
  await sleep(300);
}
