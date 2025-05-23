function closed() {
    if (confirm("do you really want to close it") == true) {
        window.close();
    }  
}

let n1 = document.getElementById('n1');
let c1 = document.getElementById('c1');
let nc1 = document.getElementById('nc1');
let s = document.getElementById('s');

function clear1() {
    n1.value = "";
    c1.value = "";
    nc1.value = "";
    n1.focus();
}

let n2 = document.getElementById('n2');
let c2 = document.getElementById('c2');
let nc2 = document.getElementById('nc2');

function clear2() {
    n2.value = "";
    c2.value = "";
    nc2.value = "";
    n2.focus();
}

let n3 = document.getElementById('n3');
let c3 = document.getElementById('c3');
let nc3 = document.getElementById('nc3');

function clear3() {
    n3.value = "";
    c3.value = "";
    nc3.value = "";
    n3.focus();
}

let n4 = document.getElementById('n4');
let c4 = document.getElementById('c4');
let nc4 = document.getElementById('nc4');

function clear4() {
    n4.value = "";
    c4.value = "";
    nc4.value = "";
    n4.focus();
}

function calcul() {
    nc1.value = n1.value * c1.value;
    nc2.value = n2.value * c2.value;
    nc3.value = n3.value * c3.value;
    nc4.value = n4.value * c4.value;
    ncs.value = nc1.value + nc2.value + nc3.value + nc4.value;
    s.value = c1.value + c2.value + c3.value + c4.value;
    mg.value = ncs.value / s.value ;
}

/*

let input = document.getElementsByTagName("input");

function clearall() {
    for (let index = 0; index < input.length; index++) {
        input[index].value = "";
    }
    input[0].focus();
}

*/

let input = document.querySelectorAll('input');

function clearall() {
    for (let index = 0; index < input.length; index++) {
        input[index].value = "";
    }
    input[0].focus();
}
