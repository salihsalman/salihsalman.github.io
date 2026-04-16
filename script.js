const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");

let count = 0;
btn.addEventListener("click", () => {
  count += 1;
  greeting.textContent = `Hello, World! (${count})`;
});
