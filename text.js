$(document).ready(function () {
    $("form#loopTestForm").submit(runLoops);
});

function runLoops(event) {
    // Stop the form from submitting
    event.preventDefault();

    // This variable will contain one of three strings:
    // "for-loop", "while-loop", or "do-while-loop"
    let selectedLoop = $("input[name=loop-type]:checked").val();

    /*
        Depending on which loop was selected,
        call the appropriate function.

        Possible values of selectedLoop and
        the corresponding function calls are:

        "for-loop"	    ==>  runForLoop()
        "while-loop"    ==>  runWhileLoop()
        "do-while-loop" ==>  runDoWhileLoop()
    */

    if (selectedLoop === "for-loop")
    {
        runForLoop();
    }
    else if (selectedLoop === "while-loop")
    {
        runWhileLoop();
    }
    else if (selectedLoop === "do-while-loop")
    {
        runDoWhileLoop();
    }






}


function runWhileLoop() {
    let number = parseInt($("input#myNumber").val());
    let output = "";

    /*
        Use a while loop to output the letter A
        "number" times. For example, if "number" is 5,
        then output should be "AAAAA".

        (Or for a challenge, output the first "number" letters of the alphabet!)

        Hint: Use jQuery's append() to add text to an element
        (instead of replacing text)

        $("div#while-result").append(...);
    */
    let s1 = 0;

    while(s1 < number)
    {
        output += "A";
        s1++;
    }


    $("div#while-result").text(output);
}


function runForLoop() {
    let number = parseInt($("input#myNumber").val());
    let sum = 0;

    /*
        Use a for loop to add the numbers 1 through "number"
        into the variable "sum". Output the sum to the div.
    */
    for (let i = 0; i <= number; i++) {
        sum += i;
    }

    $("div#for-result").text(sum);
}


function runDoWhileLoop() {
    let number = parseInt($("input#myNumber").val());

    /*
        Use a do-while loop to output the numbers 1 through
        "number". For example, if "number" is 5, then output
        should be "12345".

        Hint: Use jQuery's append() to add text to an element
        (instead of replacing text)

        $("div#do-while-result").append(...);
    */
    let start = 0;
    do
    {
        start++
        $("div#do-while-result").append(start);
    }while(start < number)



}