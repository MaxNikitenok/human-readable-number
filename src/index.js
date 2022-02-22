const arr1_19 = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
const arr20_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


module.exports = function toReadable (number) {
    
    let a = Math.floor(number/100);
    let b = Math.floor((number - (a * 100)) / 10);
    let c = number - (a * 100 + b * 10);

    if (number > 99) {
        readable = arr1_19[a] + 'hundred ' + arr20_90[b] + ' ' + arr1_19[c];
    } 
    else {
        readable = arr20_90[b] + ' ' + arr1_19[c];
    };
    return readable;
    };
