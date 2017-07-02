// HTML5 uses the utf-8 character set by default which has 256 characters
var MAX_NUM_CHARS = 256;

function isPermutation(str1, str2) {
    if (!str1 || !str2) {
        return false
    }
    let str1Length = str1.length;
    let str2Length = str2.length;
    if (str1Length !== str2Length) {
        return false;
    }
    var charBucket = new Array(MAX_NUM_CHARS), charCode, i;
    // Go through first string incrementing buckets
    for (i = 0; i < str1Length; i++) {
        charCode = str1.charCodeAt(i);
        if (charBucket[charCode]) {
            charBucket[charCode]++;
        } else {
            charBucket[charCode] = 1;
        }
    }
    // Go through second string decrementing buckets
    for (i = 0; i < str2Length; i++) {
        charCode = str2.charCodeAt(i);
        if (charBucket[charCode]) {
            charBucket[charCode]--;
        }
    }
    // Scan through character bucket, making sure all buckets are empty
    return !charBucket.some((bucket) => !!bucket);
}

// Subtract 2 since first argument is node and second is path of program
let numArgs = process.argv.length - 2;

if (numArgs % 2 !== 0) {
    console.error('Invalid # of parameters passed:  Must be an even #');
    return;
}

// Evaluate for each pair of arguments
var args = process.argv.slice(2);

for (var i = 0; i < numArgs; i += 2) {
    console.log(isPermutation(args[i], args[i + 1]));
}