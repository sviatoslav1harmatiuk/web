function* randomGenerator(min, max) {
  while (true) {
    yield Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

let min = parseInt(prompt("Введіть мінімальне число:"));
let max = parseInt(prompt("Введіть максимальне число:"));

let generator = randomGenerator(min, max);

const btn = document.getElementById("next");
const out = document.getElementById("out");

btn.addEventListener("click", () => {
  out.textContent = generator.next().value;
});
