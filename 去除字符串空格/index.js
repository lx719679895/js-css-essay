function delSpace(str, direction) {
  let reg = ''
  switch (direction) {
    case 'left':
      reg = /^\s*/g
      break
    case 'right':
      reg = /\s*$/g
      break
    case 'both':
      reg = /^\s*|\s*$/g
      break
    default:
      reg = /\s*/g
      break
  }
  let newStr = str.replace(reg, '')
  if (direction === 'middle') {
    console.log(str.match(/^\s*/g));
    console.log(str.match(/\s*$/g));
    let leftSpace = str.match(/^\s*/g)[0]
    let rightSpace = str.match(/\s*$/g)[0]
    newStr = leftSpace + newStr + rightSpace
  }
  return newStr
}

let str = '  sdfa   Asfsdf Bsf Cdfsdf   '
console.log(delSpace(str, 'left'));
console.log(delSpace(str, 'right'));
console.log(delSpace(str, 'both'));
console.log(delSpace(str, 'middle'));

// 时间正则
const dateReg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[0-9]|[1-2][0-9]|3[0-1]) ([0-1]\d|20|21|22|23):([0-5]\d)(:([0-5]\d)){0,1}$/
console.log(dateReg.test('2021-03-20 21:30'));