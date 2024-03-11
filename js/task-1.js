// task-1.js

function slugify(title) {
    // Перетворюємо всі символи в нижній регістр
    const lowercaseTitle = title.toLowerCase();
    // Розділяємо слова пробілами
    const words = lowercaseTitle.split(' ');
    // З'єднуємо слова тире
    const slug = words.join('-');

    return slug;
}

// Перевірка роботи функції з прикладами
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
