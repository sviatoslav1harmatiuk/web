const userName = prompt("Введіть своє ім'я:");

const user = {
  name: userName,
  say() {
    alert(`Hello, ${this.name}`);
  }
};

const btn = document.getElementById("hello");

btn.addEventListener("click", user.say.bind(user));