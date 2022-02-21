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

function decode(expr) {
    let arrayTens = [];
    let arrayTwos = [];

    for (let i = 0; i <= expr.length; i += 10){
        let str = expr.slice(i, i + 10);
        arrayTens.push(str);
    }
    arrayTens.forEach(function(twos){
        let phrase = '';
        for (let i = 0; i < 10; i += 2){
            let item = twos.slice(i, i + 2);
            if (item === '00'){
                phrase += '';
            } else if (item ==='10'){
                phrase += '.'
            } else if (item === '11'){
                phrase += '-';
            }
        }
        arrayTwos.push(phrase);
    })
    let result = arrayTwos.map(function(item){
        return MORSE_TABLE[item] || ' ';
    })
    result.pop();
    return result.join('');
}

module.exports = {
    decode
}