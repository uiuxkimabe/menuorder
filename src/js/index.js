// hamBtn

document.querySelector(".hamBtn").addEventListener("click", () => {
  const navigasi = document.querySelector(".navigasi");
  navigasi.classList.toggle("popup");
});

// search
const inputField = document.getElementById("inputField");
const list = document.querySelectorAll("#list .card");

inputField.addEventListener("input", () => {
  const inputValue = inputField.value.toLowerCase();

  list.forEach((element) => {
    const text = element.textContent.toLowerCase();
    element.style.display = text.includes(inputValue) ? "block" : "none";
  });
});

// filter
const filterNav = document.querySelectorAll(".navigasi ul li");
const all = document.querySelectorAll(".card");
const snack = document.querySelectorAll(".snack");
const pasta = document.querySelectorAll(".pasta");
const indo = document.querySelectorAll(".indo");
const chin = document.querySelectorAll(".chinese");
const bev = document.querySelectorAll(".bev");
console.info(filterNav);

filterNav[0].addEventListener("click", () => {
  all.forEach((element) => {
    element.style.transform = "block";
  });
});

filterNav[1].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.transform = "block";
  });
  pasta.forEach((element) => {
    element.style.transform = "none";
  });
  indo.forEach((element) => {
    element.style.transform = "none";
  });
  chin.forEach((element) => {
    element.style.transform = "none";
  });
  bev.forEach((element) => {
    element.style.transform = "none";
  });
});

filterNav[2].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.transform = "none";
  });
  pasta.forEach((element) => {
    element.style.transform = "block";
  });
  indo.forEach((element) => {
    element.style.transform = "none";
  });
  chin.forEach((element) => {
    element.style.transform = "none";
  });
  bev.forEach((element) => {
    element.style.transform = "none";
  });
});

filterNav[3].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.transform = "none";
  });
  pasta.forEach((element) => {
    element.style.transform = "none";
  });
  indo.forEach((element) => {
    element.style.transform = "block";
  });
  chin.forEach((element) => {
    element.style.transform = "none";
  });
  bev.forEach((element) => {
    element.style.transform = "none";
  });
});

filterNav[4].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.transform = "none";
  });
  pasta.forEach((element) => {
    element.style.transform = "none";
  });
  indo.forEach((element) => {
    element.style.transform = "none";
  });
  chin.forEach((element) => {
    element.style.transform = "block";
  });
  bev.forEach((element) => {
    element.style.transform = "none";
  });
});

filterNav[5].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.transform = "none";
  });
  pasta.forEach((element) => {
    element.style.transform = "none";
  });
  indo.forEach((element) => {
    element.style.transform = "none";
  });
  chin.forEach((element) => {
    element.style.transform = "none";
  });
  bev.forEach((element) => {
    element.style.transform = "block";
  });
});
