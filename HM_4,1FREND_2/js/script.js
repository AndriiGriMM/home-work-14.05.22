function equality() {
  const userAge = +prompt("Сколько Вам лет?", 18);
  let resultAge = "";
  if (userAge >= 18 || userAge >= 100) {
    resultAge = "Урра";
    console.log(resultAge);
  } else {
    resultAge = Boolean(resultAge);
    console.log(resultAge);
  }
}
