'use strict';
// debugger
function fibonacci(n) {
    // Если n = 1 || 2 то возвращаем 1
    if (n === 1 || n === 2) {
      return 1;
    }
    // prev1 хранит значение до обновления prev2, а prev2 до обновления current
    let prev1 = 1;
    let prev2 = 1;
    let current;
    // Вычисляем Фибоначчи через цикл
    for (let i = 3; i <= n; i++) {
      current = prev1 + prev2;
      prev1 = prev2;
      prev2 = current;
    }
    
    return current;
  }
  const n = 7;
  const fibonacciNum = fibonacci(n);
  console.log(`${fibonacciNum} -й член последовательности Фибоначчи`);