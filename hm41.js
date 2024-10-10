// 1. 'number' + 3 + 3
const result1 = 'number' + 3 + 3;
console.log(result1); // 'number33'
// cтрока 'number' плюс число 3 перетворює число в строку. Результат: 'number3'.
// 'number3' плюс 3 число перетворюється в строку. Результат: 'number33'.


// 2. null + 3
const result2 = null + 3;
console.log(result2); // 3
// null перетворюється в число 0 
//  0 + 3 = 3. Результат: 3


// 3. 5 && "qwerty"
const result3 = 5 && "qwerty";
console.log(result3); // 'qwerty'
// обидва операнди truthy, оператор && поверне друге значення. Результат: "qwerty".


// 4. +'40' + +'2' + "hillel"
const result4 = +'40' + +'2' + "hillel";
console.log(result4); // '42hillel'
// +40 і +20 - два числа. 40+2=42
// 42 + 'hillel': число 42 перетворюється в строку. Результат: '42hillel'.


// 5. '10' - 5 === 6
const result5 = '10' - 5 === 6;
console.log(result5); // false
// 10 число. 10-5=5 (при операторі -)
// 5 не дорівнює 6. Результат: false.


// 6. true + false
const result6 = true + false;
console.log(result6); // 1
// true це 1, false це 0. 1+0=1 Результат:1.

// 7. '4px' - 3
const result7 = '4px' - 3;
console.log(result7); // NaN
//'4px' це NaN, тому що не може стати числом. Подальша оперція з нам дає завжди NaN. Результат: NaN.


// 8. '4' - 3
const result8 = '4' - 3;
console.log(result8); // 1
//'4' стає числом (при операторі -). 4 - 3 = 1. Результат:1.


// 9. '6' + 3 ** 0
const result9 = '6' + 3 ** 0;
console.log(result9); // '61'
// спочатку 3 в степені 0 дорівнює 1. '6'- строка(при операторі +), 1 переходить теж в строку. 
// '6' + '1'. Результат:61.


// 10. 12 / '6'
const result10 = 12 / '6';
console.log(result10); // 2
// при операторі / '6' переходить в число. 12 / 6 = 2. Результат: 2.


// 11. '10' + (5 === 6)
const result11 = '10' + (5 === 6);
console.log(result11); // '10false'
// 5 не дорівнює 6. Результат: false.
// оператор + перетворює '10' в строку. '10' + false: false перетворюється в строку 'false'. Результат: '10false'.

// 12. null == ''
const result12 = null == '';
console.log(result12); // false
// == порівнює значення. null і пустий рядок (''), не є рівними. Результат: false.


// 13. 3 ** (9 / 3)
const result13 = 3 ** (9 / 3);
console.log(result13); // 27
//  9 / 3 = 3.    3 ** 3 = 27 (піднесення до степеня). Результат:27


// 14. !!'false' == !!'true'
const result14 = !!'false' == !!'true';
console.log(result14); // true
// !! перетворює значення в булеве: !!'false' повертає true, оскільки будь-яка непуста строка вважається "правдивою" (truthy).
// 2. !!'true' також повертає true.
// 3. true == true повертає true. Результат: true.


// 15. 0 || '0' && 1
const result15 = 0 || '0' && 1;
console.log(result15); // 1
// || повертає перше "правдиве" значення. 0 - false.  
//'0' && 1.  && повертає перше falsy значення, або, якщо всі  truthy, останнє truthy значення.
//'0' — це непуста строка -  truthy. Тому оператор переходить до 1. 1  є truthy, тому результатом операції && буде останнє truthy значення, тобто 1.
// 0 || 1. Перший  0 — це falsy, тому оператор || повертає  1. Результат:1.

// 16. (+null == false) < 1
const result16 = (+null == false) < 1;
console.log(result16); // false
// +null перетворює null у число 0.
// 0 == false нуль рівне false, що дає true. True - це 1.  1 < 1: Результат false.

// 17. false && true || true
const result17 = false && true || true;
console.log(result17); // true
// / false && true: оператор && повертає false, оскільки перший  є false.
// 2. false || true: оператор || повертає перше "правдиве" значення — true. Результат: true.

// 18. false && (false || true)
const result18 = false && (false || true);
console.log(result18); // false
//false || true: результат true.
// false && true: результат false (оператор && повертає false, якщо один з операндів є false). Результат false.


// 19. (+null == false) < 1 ** 5
const result19 = (+null == false) < 1 ** 5;
console.log(result19); // false
// +null перетворюється в число 0.
// 0 == false: результат true.
// 1 ** 5 = 1. true це 1 
// (1) < 1: Результат: false.
