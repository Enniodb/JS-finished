/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // To get all buttons use bytagname
    let buttons = document.getElementsByTagName("button");
    let input = document.getElementsByTagName("input");

    // go over all buttons with for loop
    for (let i=0; i<buttons.length; i++) {
        function slot(){
            let randomNr = Math.floor(Math.random()*99);
            input[i].value = randomNr;
        }
    }
    let spin = setInterval(slot,100);
    buttons[i].addEventListener("click", function () {
        let minVal = input[i].getAttribute('data-min');
        let maxVal = input[i].getAttribute('data-max');


    })


})();
