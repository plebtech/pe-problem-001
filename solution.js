// find the sum of all natural numbers below 1000 that are multiples of 3 OR 5.
// sum of
// multiples of 3 or 5
// below 1000

let sum = 0;
for (i = 0; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        sum+=i;
    }
}
console.log(sum);