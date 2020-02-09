let n = prompt('Введіть стартове число',10);

n = parseInt(n, 10);

while (isNaN(n)) {
   n=parseInt(prompt("Ви ввели невірне число!"));
} 

console.log(`Стартове число: ${n}`);


let m = prompt(' Введіть кінцеве число',100);

m = parseInt(m, 10);

while (isNaN(m)) {
  m = parseInt(prompt("Ви ввели невірне число!"));
};

console.log(`Кінцеве число: ${m}`);


if (n > m) {
  prompt('Error! The starting number must be lower than the ending number!');
}


const skipEvenNumbers = confirm('Пропустити парні числа?')

console.log(`Пропустити парні числа? : ${skipEvenNumbers}`);


let sumOfNumbers = 0;

for (let i = n; i<= m; i++) {
    if (!skipEvenNumbers) {
      sumOfNumbers+=i;
    } else if (skipEvenNumbers) {
        if (i%2 !== 0) {
        sumOfNumbers+=i;
      }
    }
  }


if (!skipEvenNumbers) {
  console.log(`Сума непарних чисел між ${n} та ${m} : ${sumOfNumbers}`);
} else if (skipEvenNumbers) {
  console.log(`Сума непарних чисел між ${n} та ${m} : ${sumOfNumbers}`);
}


document.writeln(`<p>Стартове число: ${n}<p>`);
document.writeln(`<p>Кінцеве число: ${m}<p>`);
document.writeln(`<p>Пропустити парні числа? : ${skipEvenNumbers}<p>`);

skipEvenNumbers ? document.writeln(`Сума непарних чисел між ${n} та ${m} is: ${sumOfNumbers}`) : document.writeln(`Сума чисел між ${n} and ${m} is: ${sumOfNumbers}`);

