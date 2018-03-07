var wordNumbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
};
var wordNumbersMagnitude = {
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000,
    'billion': 1000000000,
    'trillion': 1000000000000
};
var a, n, g;

function convertTextToNumber(text) {
    if(isNaN(text)) {
        a = text.toString().split(/[\s-]+/);
        n = 0;
        g = 0;

        a.forEach(function(value) {
            var x = wordNumbers[value];

            if (x != null) {
                g = g + x;
            } else if (value == "hundred") {
                g = g * 100;
            } else {
                x = wordNumbersMagnitude[value];
                if (x != null) {
                    n = n + g * x
                    g = 0;
                }
            }
        });

        return n + g;
    } else {
        return parseInt(text);
    }
}
