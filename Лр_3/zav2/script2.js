function* passwordGenerator() {
  let password = "";
  while (true) {
    let char = yield;
    if (char === "done") return password;
    password += char;
  }
}

document.getElementById("start").addEventListener("click", () => {
  const gen = passwordGenerator();
  gen.next();

  while (true) {
    let input = prompt("Введіть символ для паролю (або 'done' для завершення):");
    let result = gen.next(input);

    if (result.done) {
      document.getElementById("result").textContent = 
        "Ваш пароль: " + result.value;
      break;
    }
  }
});
