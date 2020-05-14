let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");

let delta = (Math.pow(b, 2) - (4 * a * c));

let x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);

//alert(`Resultado x1: ${x1} || Resultado x2: ${x2}`);

document.getElementById('x1').innerText(x1.toString());
document.getElementById('x2').innerText(x2.toString());