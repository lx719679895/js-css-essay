var test = (Array(2).join(0) + 30).slice(-2)

console.log(test, typeof test)

const n = 10
nextPrime:for(let i=2; i<=n; i++) {
  for(let j=2; j<i; j++) {
    if (i%j === 0) {
      continue nextPrime
    }
  }
  console.log(i);
}