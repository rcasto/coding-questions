var http = require('http');
var fs = require('fs');

var distinctWordsSet = new Set();
var unwantedCharactersSet = new Set(['\'', '!', '?', '-', ',', '.', ';', '\"', ':', '(', ')']);
var lastToken = '';
var whiteSpaceRegex = /\s+/;

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

function normalizeWordToken(token) {
    token = token.toLowerCase();
    token = removeUnwantedCharacters(token);
    token = token.trim();
    return token;
}

function stitchChunks(prevLastToken, currChunk) {
    var words = currChunk.split(whiteSpaceRegex);
    var numWords = words.length;
    var chunkLength = currChunk.length;

    // check first token if there was a previous last token saved
    if (prevLastToken) {
        if (chunkLength > 0 && currChunk[0] !== ' ') {
            let save = words[0];
            words[0] = prevLastToken + words[0]; // prepend the last saved token
        } else {
            numWords++;
            words.unshift(prevLastToken); // last token was a word of it's own, add to list
        }
    }

    // check last character, if not a space, let's save
    // the last token it's connected to
    if (currChunk[chunkLength - 1] !== ' ') {
        prevLastToken = words[numWords - 1];
    } else {
        prevLastToken = ''; // reset saved token
    }

    return {
        lastToken: prevLastToken,
        words: words
    };
}

function extractDistinct(chunk) {
    var words, lastIndex;

    // replace all newlines with a space character
    chunk = chunk.replace(/\n|\r|\r\n/g, ' ');

    ({ lastToken, words } = stitchChunks(lastToken, chunk));
    lastIndex = words.length - 1;

    words.forEach((word, i) => {
        // Cannot be sure about last token without checking next token
        // Implies last token when stream ends needs to be processed afterwards as it won't
        // have a next token to check
        if (i === lastIndex) {
            return;
        }

        addDistinctWord(normalizeWordToken(word));
    });
}

function addDistinctWord(word) {
    if (word && !distinctWordsSet.has(word)) {
        distinctWordsSet.add(word);
    }
}

function report() {
    var numDistinctWords = distinctWordsSet.size;
    console.log(`Done reading, there are ${numDistinctWords} distinct words`);
}

// Network request stream - fetch text directly from website
var request = http.request({
    protocol: 'http:',
    port: 80,
    method: 'GET',
    host: 'classics.mit.edu',
    path: '/Homer/iliad.mb.txt'
}, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => extractDistinct(chunk));
    response.on('end', () => {
        addDistinctWord(normalizeWordToken(lastToken));
        report();
    });
});
request.once('error', (error) => console.error(error));

request.end();

// File stream - read from local file
// var fileStream = fs.createReadStream('iliad.txt', {
//     encoding: 'utf8'
// });
// fileStream.on('data', (chunk) => extractDistinct(chunk));
// fileStream.on('end', () => {
//     addDistinctWord(normalizeWordToken(lastToken));
//     report();
// });
// fileStream.once('error', (error) => console.error(error));