let n = prompt('Введіть стартове число',10);

n = parseInt(n, 10);

if (isNaN(n)) {
   alert("Ви ввели невірне число!");
} 

console.log(`Стартове число: ${n}`);


let m = prompt(' Введіть кінцеве число',100);

m = parseInt(m, 10);

if (isNaN(m)) {
   alert("Ви ввели невірне число!");
};

console.log(`Кінцеве число: ${m}`);


if (n > m) {
  alert('Error! The starting number must be lower than the ending number!');
}


let skipEvenNumbers = confirm('Пропустити парні числа?')

console.log(`Пропустити парні числа? : ${skipEvenNumbers}`);


let sumOfNumbers = 0;

for (let i = n; i<= m; i++) {
    if (skipEvenNumbers === false) {
      sumOfNumbers+=i;
    } else if (skipEvenNumbers === true) {
        if (i%2 !== 0) {
        sumOfNumbers+=i;
      }
    }
  }


if (skipEvenNumbers === false) {
  console.log(`Сума непарних чисел між ${n} та ${m} : ${sumOfNumbers}`);
} else if (skipEvenNumbers === true) {
  console.log(`Сума непарних чисел між ${n} та ${m} : ${sumOfNumbers}`);
}


document.writeln(`<p>Стартове число: ${n}<p>`);
document.writeln(`<p>Кінцеве число: ${m}<p>`);
document.writeln(`<p>Пропустити парні числа? : ${skipEvenNumbers}<p>`);

skipEvenNumbers ? document.writeln(`Сума непарних чисел між ${n} та ${m} is: ${sumOfNumbers}`) : document.writeln(`Сума чисел між ${n} and ${m} is: ${sumOfNumbers}`);

