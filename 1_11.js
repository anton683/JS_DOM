let aaa = document.querySelectorAll('.cars > li');
let cars = [] ;
aaa.forEach(el => cars.push(el.innerHTML));

console.log(cars);