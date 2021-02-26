function compile(tem) {
  tem = tem.replace(/\{\{(.+)\}\}/g, function() {
    let key = arguments[1].trim()
    return '${' + key + '}'
  })

  const body = "let str = ''; with(obj) { str += `" +
                tem + 
                "`} return str"
  return new Function('obj', body)
}