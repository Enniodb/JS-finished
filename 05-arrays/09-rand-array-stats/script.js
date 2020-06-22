/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener("click", function () {

        let  array = [];
        for(i = 0; i < 10; i++) {
            array[i] = Math.floor( Math.random() * 100 ); // random n from 1 to 100

            document.getElementById('n-'+(i+1)).innerHTML = array[i]; // assign number to table

        }

        let min = Math.min(...array);

        document.getElementById('min').innerHTML = min ; // get min value

        let max = Math.max(...array);

        document.getElementById('max').innerHTML = max ; // get max value

        let sum = array.reduce((a,b) => a+b, 0);

        document.getElementById('sum').innerHTML = sum ; // get sum

        let average = (sum / array.length) ;

        document.getElementById('average').innerHTML = average ;


    })

})();
