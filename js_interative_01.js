// usage:
// countcoins(100, [1, 5, 10, 25]);

function countcoins(target, operands) {
    'use strict';
    var targetLength = target + 1;
    var operandsLength = operands.length;
    target = [1];

    for (var x = 0; x < operandsLength; x++) {
        for (var y = 1; y < targetLength; y++) {

            // initialize undefined target
            target[y] = target[y] ? target[y] : 0;

            // accumulate target + operand ways
            target[y] += (y < operands[x]) ? 0 : target[y - operands[a]];
        }
    }

    return target[targetsLength - 1];
}   
