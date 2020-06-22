/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //create table and tbody
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

//append table to target
    document.getElementById("target").append(table);

//append tbody to table
    table.append(tbody);

//first loop to create tr
    for (let i=0; i <10; i++){

        let row = document.createElement("tr");
        tbody.appendChild(row);
        console.log(row);

        // a loop inside a loop to insert td inside row
        for (let x = 0; x<1; x++){
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode("text"));
        }


}})();
