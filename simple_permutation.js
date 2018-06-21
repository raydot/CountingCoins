// from Stanford Programming Abstractions Lecture 10
// Retrieved from https://www.youtube.com/watch?v=NdF1QDTRkck

function recPermute(string soFar, string rest) {
    if (rest == '') {
        console.log(`So far: ${soFar}\n`);
    } else {
        for (int i = 0; i < rest.length(); i++) {
            string next = soFar + rest[i];
            string remaining    = rest.substr(0, i)
                                + rest.substr(i + 1);
            recPermute(next, remaining);
        }
    }
}

// "wrapper" function
listPermutations(whichString) {
    recPermute('', whichString);
}