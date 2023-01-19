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
    result = '';

    for (let i = 0; i < expr.length; i += 10) {
        result = result + ' ' + expr.slice(i, i + 10);
    }

    let arr = result.trim().split(' ');

    let newArr = arr.map((item) => {

        let morseItemArr = '';

        if (item === '**********') {
            return ' ';
        }

        for (let i = 0; i < item.length; i += 2) {

            if (Number(item[i] + item[i + 1]) === 10) {
                morseItemArr = morseItemArr + '.';
            }
            else if (Number(item[i] + item[i + 1]) === 11) {
                morseItemArr = morseItemArr + '-';
            }
        }

        morseItemArr = MORSE_TABLE[morseItemArr];

        return morseItemArr;
    });
    return newArr.join('');
}

module.exports = {
    decode
}