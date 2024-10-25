// Створення об'єкта для собаки
const dog = {
  name: 'Tito',
  age: 3,
  breed: 'Corgi',

  // Метод для виведення всіх властивостей об'єкта
  getInfo: function() {
    for (let key in this) {
      if (typeof this[key] !== 'function') { // перевірка, щоб пропустити методи
        console.log(key + ': ' + this[key]);
      }
    }
  }
};

// Використання методу getInfo()
console.log('Initial properties:');
dog.getInfo();

console.log('After adding a new property:');
dog.favoriteToy = 'Ball';
dog.getInfo();
