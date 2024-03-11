// task-3.js

function filterArray(numbers, value) {
    // Порожній масив для підходящих чисел
    const filteredArray = [];

    // Цикл для ітерації кожного елемента масиву numbers
    for (let i = 0; i < numbers.length; i++) {
        // Перевірка кожного елемента та додавання до filteredArray, якщо він більший за value
        if (numbers[i] > value) {
            filteredArray.push(numbers[i]);
        }
    }

    // Повернення нового масиву з підходящими числами
    return filteredArray;
}

// Перевірка роботи функції з прикладами
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Ви можете додати додаткові випадкові тести для перевірки
