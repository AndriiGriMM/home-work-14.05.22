function equality() {
  const userAge = +prompt("Сколько Вам лет?", 18);
  let resultAge = userAge>=18 && userAge <= 100 ? true:false
  if (resultAge === true) {
    resultAge = "Урра";
    return (console.log(resultAge)) 
  } else {
    return (console.log(resultAge))
  }
}
