/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("keydown", function () {

        document.getElementById("pass-one").setAttribute("maxLength", "8");
        let password = document.getElementById("pass-one").value;
        // .*
        let regex = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8}$");
        let passwordmatch = regex.test(password);

        if (passwordmatch === true) {
            document.getElementById('validity').innerHTML = "ok";
        }

        else {
            document.getElementById("validity").innerHTML = "not ok";
        }


    })

})();
