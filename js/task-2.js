// task-2.js

function makeArray(firstArray, secondArray, maxLength) {
    // З'єднуємо два масиви
    const newArray = firstArray.concat(secondArray);

    // Перевіряємо, чи не перевищує новий масив задану максимальну довжину
    if (newArray.length > maxLength) {
        // Повертаємо копію масиву з обмеженою довжиною maxLength
        return newArray.slice(0, maxLength);
    }

    // Якщо не перевищує, повертаємо весь новий масив
    return newArray;
}

// Перевірка роботи функції з прикладами
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// Ви можете додати додаткові випадкові тести для перевірки
