"use strict";

function checkProbabilityTheory(count) {
    let evenCount = 0;  //   Парні числа
    let oddCount = 0;   // Непарні числа

    for (let i = 0; i < count; i++) {
        // Генерація  числа в диапазоні від 100 до 1000 включно
        let number = Math.floor(Math.random() * (1001 - 100)) + 100;

        // Провірка на парність числа
        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);

    
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    console.log(`Відсоток парних чисел: ${evenPercentage.toFixed(2)}%`);
    console.log(`Відсоток непарних чисел: ${oddPercentage.toFixed(2)}%`);
}

checkProbabilityTheory(1000);





