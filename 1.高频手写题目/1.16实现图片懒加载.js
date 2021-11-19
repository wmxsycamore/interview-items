function isVisible(el) {
  const position = el.getBoundingClientRect();
  const windowHeight = document.documentElement.clientHeight;
  // 顶部 边缘可见
  const topVisible = position.top > 0 && position.top < windowHeight
  // 底部边缘可见
  const bottomVisible = position.bottom < windowHeight && position.bottom > 0;
  return topVisible || bottomVisible;
}

function imageLazyLoad() {
  const images = document.querySelectorAll('img');
  for(let img of images) {
    const realSrc = img.dataset.src;
    if(!realSrc) continue;
    if(isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
}
// throttle节流方法
window.addEventListener('scroll', throttle(imageLazyLoad, 1000))