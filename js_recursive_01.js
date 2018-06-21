// according to rosettacode.org/wiki/Count_the_coins
// "inefficient recursive algorithm (naively calculates number 
// of calculations by actually permuting them")

// usage: countcoins(100, [1, 5, 10, 25]);

function countcoins(target, operands) {
    'use strict';
    var operandsLength = operands.length;
    var solutions = 0;

    function permutate(a, x) {

        // base case
        if (a === t) {
            solutions++;
        }

        // recursive case
        else if (a < t) {
            for (var i = 0; i < operandsLength; i++) {
                if (i >= x) {
                    permutate(o[i] + a, i);
                }
            }
        }
    }

    permutate(0, 0);
    return solutions;
}