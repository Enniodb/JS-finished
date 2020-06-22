/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {
        let birthDay = document.getElementById("dob-day").value;
        let birthMonth = document.getElementById("dob-month").value;
        let birthYear = document.getElementById("dob-year").value;

        let now = new Date();
        let toYear = now.getFullYear();
        let toMonth = now.getMonth();
        let toDay = now.getDate();


        let age = toYear - birthYear;

        if (toMonth < (birthMonth - 1)) // Why the minus 1?
        {
            age--;
        }
        if (((birthMonth-1) === toMonth) && ( toDay < birthDay))
        {
            age--;
        }

        alert(age)

    });

})();
