/*function callAli() {
    alert("alireza is the best");
}

function count(e) {
    if (eval(document.getElementById("count").innerHTML) != 0)
        document.getElementById("count").innerHTML = eval(document.getElementById("count").innerHTML) - 1;

    else {
        e.preventDefault();
        alert("password can only be 8 characters")
    }
}

function emptysubmit() {
    document.getElementById("nameinput").value
}

function changePic() {
    document.getElementById("hi").style.width = "50px";
}

function creatElem() {
    var newLink = document.createElement('a');
    newLink.innerHTML = "link33"
    newLink.href = '#'
    newLink.onmouseover = function a() { callAli() }
    var target = document.getElementById("divId").getElementsByTagName('a')[1];
    document.getElementById("divId").insertBefore(newLink, target);
}

function clearElem() {
    document.getElementById("divId").removeChild(document.getElementById("divId").getElementsByTagName('a')[1])
}

function showHTML() {
    alert(document.documentElement.innerHTML)
}
var d = new Date('2010/05/10');

alert(d)
alert(d.getDate())
alert(d.getFullYear())
alert(d.getMilliseconds())
alert(d.getMinutes())
alert(d.getMonth())
alert(d.toDateString())
alert(d.getSeconds())
alert(d.getTime())
*/
/
var students = new Array();
cnt = 0;

function getNames() {
    var fname = prompt("enter first name:");
    var lname = prompt("enter last name:");
    var age = prompt("enter score:");
    var std = { fname: fname, lname: lname, age: age }
    students[cnt++] = std;
}

function showNames() {
    var table = "<table><tr><th>first name</th><th>last name</th><th>score</th></tr>";
    for (i = 0; i < students.length; i++) {
        table += "<tr>";
        table += "<td>" + students[i].fname + "</td>";
        table += "<td>" + students[i].lname + "</td>";
        table += "<td>" + students[i].age + "</td>";
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("table").innerHTML = table;
    alert(table)
}