const mioSplendidoArray = [1, 2, 3, 4, 5]

const inizioForEach = performance.now()
mioSplendidoArray.forEach(x => (x + x) * 10000000000)
const fineForEach = performance.now()
console.log(`Velocità [forEach]: ${fineForEach - inizioForEach} milisecondi`)

const inizioMap = performance.now()
mioSplendidoArray.map(x => (x + x) * 10000000000)
const fineMap = performance.now()
console.log(`Velocità [map]: ${fineMap - inizioMap} milisecondi`)