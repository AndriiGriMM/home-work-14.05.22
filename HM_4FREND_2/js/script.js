function equality() {
  let num = prompt("Введите число больше 100");
  for (let i = 0; i < 10; i++) {
    if (num < 100) {
      num = prompt("Вы ввели число меньше 100. введите снова");
    } else {
      console.log(num);
      break;
    }
  }
  return console.log(num);
}
