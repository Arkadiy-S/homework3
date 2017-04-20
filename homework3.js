
// ДЗ  Задача 4
/* Строка — повторение подстроки
Ввести непустую строку s. Найти такое наибольшее число k и такую строку t, что s совпадает со строкой t, выписанной k раз подряд. Вывести k.
Input: abcabcabcabc
*/

//Очевидно, наибольшее число k будет при наименьшей по длине подстроки, начиная с длины = 2, проверка в решении на длину слова не делается

"use strict";
  

function repeatingOfSubsting (s) {
let n = 0;

let numOfRepeatTmp = 0;   //  времен. число повторений подстроки

// **

let target = ""; // цель поиска - подстрока

let pos = 0; // нач. позиция для цикла поиска всех вхождений подстроки
let foundPos = 0; // найденная позиция для цикла поиска всех вхождений подстроки
let startPos = 0 ; //startPos - начальн. позиция в строке s для определения подстроки поиска из n символов

let numOfRepeat = 0;  //  число повторений подстроки

for (n=2; n <= Math.floor(s.length/2); n++) {
    // цикл изменения n - длины подстроки поиска от 2 до (целого от половины длины строки )
for (startPos=0; startPos <= s.length - 2*n; startPos++) {
    // цикл  перебора startPos - начальной позиции в строке s для определения подстроки поиска из n символов,
    //
    
target = s.substr(startPos, n); // определение подстроки поиска 
pos = 0;
numOfRepeatTmp = 0;
while (true) { // цикл поиска всех вхождений подстроки
  foundPos = s.indexOf(target, pos); 
  if (foundPos == -1) break; // подстрока не найдена
    numOfRepeatTmp++;
   //foundPos; // нашли на этой позиции
  pos = foundPos + 1; // продолжить поиск со следующей
} 
if (numOfRepeat <= numOfRepeatTmp)   {numOfRepeat = numOfRepeatTmp; /*  console.log (target, numOfRepeat); */
} 

}
}
return numOfRepeat;
}

console.log( repeatingOfSubsting("abcabcabcabc")); //abcabcabcabc