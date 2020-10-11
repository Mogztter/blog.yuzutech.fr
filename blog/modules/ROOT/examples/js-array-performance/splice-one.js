const process = require('process')
const Benchmark = require('benchmark')

if (process.env.PROTOTYPE_TAMPERING) {
  Object.setPrototypeOf(Array.prototype, {})
}

// tag::splice-one-function[]
function spliceOne(list, start) {
  for (var i = start, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}
// end::splice-one-function[]

const bench = new Benchmark('spliceOne', () => {
  spliceOne(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 0)
})
console.log(bench.run().toString())
