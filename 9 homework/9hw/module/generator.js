export function generator () {
let n = -100;
let m = 350;
let range = Math.abs(m - n);
let numberInRange = Math.round(Math.random() * range);
alert(numberInRange)
}
generator (); 