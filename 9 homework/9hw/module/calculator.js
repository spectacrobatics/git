export function calculator () {
let a = Number( prompt("Введите первое число", ""));
let b = Number( prompt("Введите второе число", ""));
let action = prompt("Введите действие ")
if ( a ==="NaN" ) {
    alert('NaN')
}
if ( b === "NaN" ) {
    alert('NaN')
}
if (action == "+") {
    alert(a+b);
}
else if (action == "-") {
    alert(a-b);
}
else if (action == "*") {
    alert(a*b);
}
else {
    alert(a/b);
}}
calculator ();