// hamBtn

document.querySelector(".hamBtn").addEventListener("click", () => {
  const navigasi = document.querySelector(".navigasi");
  navigasi.classList.toggle("popup");
});

// search
const inputField = document.getElementById("inputField");
const list = document.querySelectorAll("#list li");

inputField.addEventListener("input", () => {
  const inputValue = inputField.value.toLowerCase();

  list.forEach((element) => {
    const text = element.textContent.toLowerCase();
    element.style.display = text.includes(inputValue) ? "block" : "none";
  });
});
