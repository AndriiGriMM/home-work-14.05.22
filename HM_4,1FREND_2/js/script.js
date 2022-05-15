function equality() {
  const userAge = +prompt("Сколько Вам лет?", 18);
  return userAge >= 18 && userAge <= 100 
    ? console.log("Урра") 
    : console.log(false);
}
