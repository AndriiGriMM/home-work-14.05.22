function equality() {
  let num = prompt("Введите число больше 100");
  for (let i = 0; i < 10; i++) {
    if (num < 100) {
      num = prompt("Вы ввели число меньше 100. введите снова");
    } else if (num >= 100) {
      console.log(num);
      break;
    } else {
      console.log(num);
      break;
    }
  }
}
