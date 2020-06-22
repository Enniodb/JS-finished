/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Take orginal element and turn it into a container
    let container = document.getElementById('target');
    // Take the current string into that container
    let letters = document.getElementById('target').innerText;
    // Split the string into an array of seperate letters
    letters = letters.split("");
    // reset the container, so it's empty
    container.innerText = "";

    // shifts each letter
    function typewriter() {
        document.getElementById('target').innerHTML += letters.shift();
    // for loop that sets a delay on every letter
    }
    for(let i=0; i<letters.length; i++) {
        setTimeout(typewriter, Math.floor(Math.random()*10000))
    }

})();
