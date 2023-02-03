let aaa = document.getElementsByClassName('price');

let sum = 0;

for ( let el of aaa )  {
sum += +el.innerHTML
};

console.log(sum);