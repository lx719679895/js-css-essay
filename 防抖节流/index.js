function throttle(fn, delay) {
  let last = 0
  return (...args) => {
    const now = + Date.now()
    if (now - last > delay) {
      last = now
      fn.apply(this, args)
    }
  }
}

function debounce(fn, delay) {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}