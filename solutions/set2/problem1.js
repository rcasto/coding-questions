/*
    This program right now will not spit out a constant consistent number for the # of distinct words in The Iliad
    This is because of the stream processing, chunks do not necessarily end on a word.  They could cut off in the middle of the word.

    Would need to stitch between chunks

    loading all into memory, results in 7763 distinct words
*/

var http = require('http');

var distinctWordsSet = new Set();
var unwantedCharactersSet = new Set(['\'', '!', '?', '-', ',', '.', ';', '\"', ':', '(', ')']);
var oneLetterWordsSet = new Set(['a', 'i', 'o']);
var chunkQueue = [];
var isWorking = false;
var isDoneReading = false;

// loading all into memory
var bigChunk = '';
//

function extractDistinct(chunk) {
    return new Promise((resolve, reject) => {
        chunk = chunk.replace(/\n/g, ' ');
        var words = chunk.split(' ');
        words.forEach((word) => {
            word = word.toLowerCase();
            word = removeUnwantedCharacters(word);
            word = word.trim();
            if (word && word.length === 1 && !oneLetterWordsSet.has(word)) {
                word = '';
            }
            if (word && !distinctWordsSet.has(word)) {
                // console.log(word, word.length);
                distinctWordsSet.add(word);
            }
        });
        resolve();
    });
}

function report() {
    var numDistinctWords = distinctWordsSet.size;
    console.log(`Done reading, there are ${numDistinctWords} distinct words`);
}

function removeUnwantedCharacters(word) {
    var wordLength = word.length;
    var cleanedWord = '';
    for (var i = 0; i < wordLength; i++) {
        if (!unwantedCharactersSet.has(word[i])) {
            cleanedWord += word[i];
        }
    }
    return cleanedWord;
}

var request = http.request({
    protocol: 'http:',
    port: 80,
    method: 'GET',
    host: 'classics.mit.edu',
    path: '/Homer/iliad.mb.txt'
}, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        // load all into memory solution
        bigChunk += chunk;
        //

        // if (isWorking) {
        //     chunkQueue.push(chunk);
        // } else {
        //     isWorking = true;
        //     extractDistinct(chunk).then(function chunkCompletion() {
        //         if (chunkQueue.length > 0) {
        //             extractDistinct(chunkQueue.shift()).then(chunkCompletion);
        //         } else if (isDoneReading) {
        //             report();
        //         } else {
        //             isWorking = false;
        //         }
        //     });
        // }
    });
    response.on('end', function () {
        // load all into memory solution
        extractDistinct(bigChunk).then(report);
        //

        // isDoneReading = true;
        // if (chunkQueue.length === 0 && !isWorking) {
        //     report();
        // }
    });
});
request.on('error', (error) => console.error(error));

request.end();