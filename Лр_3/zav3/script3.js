function* chatBot() {
  const name = yield "Hi! What is your name?";
  const mood = yield `Nice to meet you, ${name}! How are you?`;
  yield `I'm glad to hear you're ${mood}. Goodbye!`;
}

document.getElementById("start").addEventListener("click", () => {
  const bot = chatBot();
  let step = bot.next();
  const dialogDiv = document.getElementById("dialog");

  while (!step.done) {
    const answer = prompt(step.value);
    step = bot.next(answer);
  }

  dialogDiv.textContent = step.value;
});
