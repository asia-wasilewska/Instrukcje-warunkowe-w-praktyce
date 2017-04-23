var a = prompt("a=");
var b = prompt("b=");

var value = (a * a) + (2 * a * b) - (b * b);

console.log(" Wynik działania z danymi a = " + a + " i b = " + b + " wynosi: " + value);

if ( value > 0 ) {
console.log("Wynik jest dodatni");
} 
else if (value < 0 ) {
console.log("Wynik jest ujemny");
}
else {
console.log("Wynik = 0");
}
