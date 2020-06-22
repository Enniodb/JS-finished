/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test(i) {
    let operandOne =  parseFloat(document.getElementById("op-one").value)
    let operandTwo =  parseFloat(document.getElementById("op-two").value)
    switch (i) {
        case 0:
            return (
                operandOne + operandTwo
            );

        case 1:
            return (
                operandOne - operandTwo
            );
        case 2:
            return (
                operandOne * operandTwo
            );
        case 3:
            return (
                operandOne / operandTwo
            );
    }
}

    (function () {
        let btns = document.getElementsByClassName('operator');
        console.log(btns)
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                alert(test(i))
                operandOne = "";
                operandTwo = "";
            })
        }

})();



