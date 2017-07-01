// Updates the average in a streaming style, one value at a time
function updateAverage(val, currAvg = 0, currEntries = 0) {
    if (currEntries < 0) {
        throw `Invalid # of entries, must be positive: ${currEntries}`;
    }
    var newTotal = (currAvg * currEntries) + val;
    return newTotal / (currEntries + 1);
}

var average = 0;
var numEntries = 0;

// Evaluate for each passed in argument
process.argv
    .slice(2)
    .forEach((arg) => {
        arg = parseInt(arg, 10);
        if (isNaN(arg)) {
            throw `Passed in argument ${arg} is not a number`;
        }
        average = updateAverage(arg, average, numEntries++);
    });

console.log(average);