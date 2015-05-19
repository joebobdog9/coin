function coins(sum) {
    var coinsR-eturned = []
    var tender = [25, 10, 5, 1]
    tender.reduce(function(owed, denomination) {
        var times = 0;
        if (owed >= denomination) {
            times = Math.floor(owed / denomination)
            for (i = 0; i < times; i++) {
                coinsReturned.push(denomination)
            }
        }
        return (owed -= (times * denomination))
    }, sum)
    return coinsReturned
}

// tests
// ---
var result = coins(11)
    // --> 10, 1
console.assert(result instanceof Array)
console.assert(result[0] === 10 && result[1] === 1)

result = coins(39)
    // --> 25, 10, 1, 1, 1, 1
console.assert(result[0] === 25 && result[1] === 10 && result[2] === 1 && result[3] === 1 && result[4] === 1 && result[5] === 1)
