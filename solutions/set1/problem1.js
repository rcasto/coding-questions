// HTML5 uses the utf-8 character set by default which has 256 characters
var MAX_NUM_CHARS = 256;

function isUnique(str) {
    var charBucket = new Array(MAX_NUM_CHARS), charCode;
    var strLength = (str && str.length) || 0;
    for (var i = 0; i < strLength; i++) {
        charCode = str.charCodeAt(i);
        if (charBucket[charCode]) {
            return false;
        }
        charBucket[charCode] = true;
    }
    return true;
}

// Evaluate for each passed in argument
process.argv
    .slice(2)
    .map(arg => isUnique(arg))
    .forEach(result => console.log(result));