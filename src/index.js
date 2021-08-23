const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const letter = 10;
const symbol = 2;
const dot = "10";
const dash = "11";

function decode(expr) {
    let arr = expr.split("");
    let result = [];

    while (arr.length) {
        let letterEncoded = arr.splice(letter * -1);
        let letterMorse = "";

        if (letterEncoded.join("") === "**********") {
            result.push(" ");
            continue;
        }

        for (i = 0; i < letterEncoded.length; i += symbol) {
            let signCode = letterEncoded.slice(i, i + symbol).join("");
            letterMorse += signCode === dot ? "." : signCode === dash ? "-" : "";
        }
        result.push(MORSE_TABLE[letterMorse]);
    }
    return result.reverse().join("");
}

module.exports = {
    decode
}