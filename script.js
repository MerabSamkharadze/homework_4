"use strict";

// დავალება 1

let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(fruits.length - 2, 1, "strawberry");

console.log(fruits);

// დავალება 2

let info = "good day";
let word = info.slice(5);

console.log(word);

// დავალება 3

function lengthOfString(string) {
  return string.length;
}

let lengthOfYourName = lengthOfString("Merabi");
console.log(lengthOfYourName);

// დავალება 4

let myArray = [5, 25, 89, 120, 36];

//1. მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;

myArray.push("javascript", "python");

//2.   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
myArray.unshift("html", "css");

//3.  გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;

console.log(myArray.length);

//4.  წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
myArray.pop();
myArray.shift();

// დავალება 5

let fruitsArray = ["ფორთოხალი", "ბანანი", "კივი"];

//1. გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
console.log(fruitsArray.length);

//2. მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;

fruitsArray.push("ვაშლი", "ანანასი");

//3. მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
fruitsArray.unshift("საზამთრო");

//4. გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;

console.log(fruitsArray.length);

//5. მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
fruitsArray.splice(2, 0, "მანგო");

//6. წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

fruitsArray.pop();
fruitsArray.shift();

//7. გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;
console.log(fruitsArray.length);

// დავალება 6

let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, "a", "b", "s");
console.log(array3);

// დავალება 7

let array7 = [15, 100, 25, 10, 36];
array7.splice(3, 1);
console.log(array7);

// დავალება 8

let array8 = [1, 2, 3, 4, 5];
let sum = 0;

array8.forEach((number) => {
  sum += number;
});

console.log(sum);

// დავალება 9
