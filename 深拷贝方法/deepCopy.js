function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => {
    return c.original === obj
  })
  console.log('hit', hit);
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  console.log('cache', cache);

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

// 返回list数组通过f函数筛选的第一个对象
function find (list, f) {
  return list.filter(f)[0]
}

let testObj = deepCopy([[1, 2, 3], {name: 'lx', age: 29}, undefined, null])
console.log(testObj);

// 数组使用Object。keys返回索引数组
console.log(Object.keys([1, 2, 3, 4]));