/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //take the original p element and turn it into a container
    var container = document.getElementById("target");
    //take the current string inside of that container
    var letters = document.getElementById("target").innerText;
    //split the string up into an array of separate letters
    letters = letters.split("");
    //"reset" the container, so it's empty
    container.innerText = "";

    //make a variable which will be our font size
    var fsize = 20;

    //The forEach() method calls a function once for each element in an array, in order.

    letters.forEach(function(letter) {

        /*for each item/letter in the array, we are creating an extra span element,
        so we can apply styles to it */
        var wrap = document.createElement("span");
        //put every letter inside one of those spans we just created
        wrap.innerText = letter;
        //apply the fontsize (which is a variable we've set earlier (and put px behind it))
        wrap.style.fontSize = fsize +"px";
        //if the fontsize reaches a certain size, reset it back to a smaller font
        if (fsize > 35) {
            fsize = 15;
        }
        //increment the fontsize by 5 for each letter
        fsize += 5;
        //send the result back to the original container
        container.appendChild(wrap);
    });

    /*
    var target = document.getElementById("target").innerText;
    document.getElementById("target").innerText = "";

    var sizes = [12, 14, 16, 18, 20, 22, 24];
    var i = 0;
    target.split("").forEach(function(letter){
        var span = document.createElement("span");
        span.style.fontSize = sizes[i] + "px";
        span.innerText = letter;
        document.getElementById('target').appendChild(span);

        if(letter !== ''){
            i++;
        }

        if(i === sizes.length-1){
            i = 0;
            sizes.reverse();
        }
    })
    */

})();
