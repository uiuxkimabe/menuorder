// hamBtn

const navigasi = document.querySelector(".navigasi");
document.querySelector(".hamBtn").addEventListener("click", () => {
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

filterNav.forEach((element) => {
  element.addEventListener("click", () => {
    const hamBtnInput = document.querySelector(".hamBtn input");
    navigasi.classList.toggle("popup");
    hamBtnInput.checked = false;
  });
});

filterNav[0].addEventListener("click", () => {
  all.forEach((element) => {
    element.style.display = "block";
  });
  console.info("oke");
});

filterNav[1].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.display = "block";
  });
  pasta.forEach((element) => {
    element.style.display = "none";
  });
  indo.forEach((element) => {
    element.style.display = "none";
  });
  chin.forEach((element) => {
    element.style.display = "none";
  });
  bev.forEach((element) => {
    element.style.display = "none";
  });
  console.info("snack");
});

filterNav[2].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.display = "none";
  });
  pasta.forEach((element) => {
    element.style.display = "block";
  });
  indo.forEach((element) => {
    element.style.display = "none";
  });
  chin.forEach((element) => {
    element.style.display = "none";
  });
  bev.forEach((element) => {
    element.style.display = "none";
  });
  console.info("pasta");
});

filterNav[3].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.display = "none";
  });
  pasta.forEach((element) => {
    element.style.display = "none";
  });
  indo.forEach((element) => {
    element.style.display = "block";
  });
  chin.forEach((element) => {
    element.style.display = "none";
  });
  bev.forEach((element) => {
    element.style.display = "none";
  });
  console.info("indo");
});

filterNav[4].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.display = "none";
  });
  pasta.forEach((element) => {
    element.style.display = "none";
  });
  indo.forEach((element) => {
    element.style.display = "none";
  });
  chin.forEach((element) => {
    element.style.display = "block";
  });
  bev.forEach((element) => {
    element.style.display = "none";
  });
  console.info("chin");
});

filterNav[5].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.display = "none";
  });
  pasta.forEach((element) => {
    element.style.display = "none";
  });
  indo.forEach((element) => {
    element.style.display = "none";
  });
  chin.forEach((element) => {
    element.style.display = "none";
  });
  bev.forEach((element) => {
    element.style.display = "block";
  });
  console.info("bev");
});

// cart
const allAddCart = document.querySelectorAll(".card .addCart");
const menuName = document.querySelectorAll(".title p");
const cartPlace = document.querySelector("#cart-place .row ul li");
const arrMenu = [];
let node;
let clone;
let count = 0;

function duplicate(numb) {
  node = menuName[numb];
  clone = node.cloneNode(true);
  cartPlace.appendChild(clone);
  arrMenu.push(clone.textContent);
  console.info(arrMenu);
}

allAddCart[0].addEventListener("click", () => {
  duplicate(0);
});

allAddCart[1].addEventListener("click", () => {
  duplicate(1);
});
