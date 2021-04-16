const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        if (madeAnySwaps) {
            console.log("this")
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr)
        };
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    outerBubbleSortLoop(madeAnySwaps = true);
}

function askIfGreaterThan(el1, el2, callback) {

    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    return reader.question(`Is ${el1} greater than ${el2}?`), function (answer) {
        if (answer === "yes") {
            callback(true);
        } else {
            callback(false);
        };
    };
};

  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.

// Once you're done testing askIfGreaterThan with dummy arguments, write this.

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
        madeAnySwaps = false; 

    if (i < arr.length - 1) {

        askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
            console.log("this")
            if (isGreaterThan) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                madeAnySwaps = true; 
            }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    if (i == (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps); 
    }
};



absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});