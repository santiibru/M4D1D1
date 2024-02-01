// 1. Crea una funzione che controlli due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma dei due è 50.

// function Sum(num1, num2) {
//     let sum = num1 + num2;
 
//     if (num1 === 50 || num2 === 50 || sum === 50) {
//         return true;
//     } else {
//         return false;
//     }
// }
 
//console.log(Sum(20, 30));
//console.log(Sum(50, 10));
//console.log(Sum(40, 30));

// 2. Crea una funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false".

// function Check(num1, num2) {
//     if (num1 >=40 && num1 <= 60 && num2 >=40 && num2 <= 60 || num1 >= 70 && num1 <= 100 && num2 >= 70 && num2<= 100) {
//         return true; 
//     } else {
//         return false;
        
//     }
// }
// console.log(Check(40, 59));

// 3. Crea una funzione che accetti un nome di città come parametro e ritoni il nome stesso se inizia con "Los" o "New", altrimenti ritorni "false".

// function CheckCity(CityName) {
//     if (CityName.startsWith("Los") || CityName.startsWith("New")) {
//         return CityName;
//     } else {
//         return false;
//     }
    
// }

// console.log(CheckCity("San Francisco"));

// 4. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come paramentro.


// function CalcSum(arr) {
    
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let num = [20, 26, 40];
// const sum = CalcSum(num);

// console.log(sum);

// 5. Crea una funzione che controlli che un array non contenga i numeri 1 o 3. Se non li contiene ritorna "True" se li contiene ritorna "false".

// function CheckNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1 || arr[i] === 3) {
//             return false;
//         } else {
//             return true;
//         }
        
//     }
    
// }
// const numbers = [2, 4, 5, 6, 7];

// console.log(CheckNumbers(numbers));

// 7. Crea una funzione per trovare il tipo di una angolo i cui gradi sono passati come parametro.

// function Angles(AngleDegrees) {
//     if (AngleDegrees > 90 && AngleDegrees <= 179) {
//         return "ottuso";
//     }
//     else if (AngleDegrees <= 89 && AngleDegrees >= 0) {
//         return "acuto";
//     }
//     else if (AngleDegrees === 180) {
//         return "piatto";
//     }
//     else if (AngleDegrees === 90) {
//         return "retto"; 
    
//     } else {
//         return "altro angolo";
//     } 

// }

// console.log(Angles(90));

// 8. Crea una funzione che crei un acronimo a partire da una frase.

// function CreatAcronym(name) {
//     const singleWord = name.split(" ");
//     let acronym = "";
//     for (let i = 0; i < singleWord.length; i++) {
//         const element = singleWord[i].charAt(0);
//         acronym += element;
//     }
//     return acronym;    
// }

// const name = "National Aeronautics Space Administration"
// const acronym = CreatAcronym(name);
// console.log(acronym);

    


