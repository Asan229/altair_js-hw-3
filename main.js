// 1. Напишите функцию, которая может преобразовывать строку в число

let string = "10";

function transform(param) {
  console.log(parseInt(param));
}
let number = transform(string);

//2. Напишите функцию, которая проверяет число четное или не четное: если четное возвращает **`true`** иначе **`false`**
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "true";
  } else {
    return "false";
  }
}
console.log(even_or_odd(2));

// 3. Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать **`true`** или **`false` -** 10 баллов

function inArray(str, mass) {
  for (let i = 0; i <= mass.length - 1; i++) {
    if (str !== mass[i]) {
      mass.splice(0, 1);
      return inArray(str, mass);
    } else return true;
  }
  return false;
}

console.log(inArray("helloo", ["helloo", "hello", "hihi"]));
console.log(inArray("hello", ["helloo", "hello", "hihi"]));
console.log(inArray("hihi", ["helloo", "hello", "hihi"]));
console.log(inArray("42", ["helloo", "hello", "hihi"]));
