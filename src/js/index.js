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

// open cart orderan
const orderan = document.getElementById("orderan");
orderan.addEventListener("click", () => {
  document.getElementById("cart-place").classList.toggle("up");
});

// cart
const allAddCart = document.querySelectorAll(".card .addCart");
const menuName = document.querySelectorAll(".title p");
const qty = document.querySelectorAll(".qty");
const arrMenuName = [];
const arrQty = [];
const tampung = document.querySelector(".tampung");
let count = 0;
let orderNotif = document.querySelector("#orderan .numb");
allAddCart.forEach((countOrder) => {
  countOrder.addEventListener("click", () => {
    let result = count + 1;
    count++;
    orderNotif.innerHTML = result;
    orderNotif.style.background = "red";
    orderNotif.style.color = "#fff";
  });
});

function addCart(numb) {
  arrMenuName.push(menuName[numb].textContent);
  arrQty.push(Number(qty[numb].value));

  // list menu
  const addList = document.createElement("li");
  const textList = document.createTextNode(
    `${menuName[numb].textContent} : ${Number(qty[numb].value)} , `
  );
  addList.appendChild(textList);
  const locList = document.querySelector("#cart-place .row ul");
  locList.appendChild(addList);
  let node;
  node = textList.cloneNode(true);
  tampung.appendChild(node);
  console.info(arrMenuName, arrQty);
}

allAddCart[0].addEventListener("click", () => {
  addCart(0);
  console.info(tampung);
});

allAddCart[1].addEventListener("click", () => {
  addCart(1);
});

allAddCart[2].addEventListener("click", () => {
  addCart(2);
});

allAddCart[3].addEventListener("click", () => {
  addCart(3);
});

allAddCart[4].addEventListener("click", () => {
  addCart(4);
});

allAddCart[5].addEventListener("click", () => {
  addCart(5);
});

allAddCart[6].addEventListener("click", () => {
  addCart(6);
});

allAddCart[7].addEventListener("click", () => {
  addCart(7);
});

allAddCart[8].addEventListener("click", () => {
  addCart(8);
});

allAddCart[9].addEventListener("click", () => {
  addCart(9);
});

allAddCart[10].addEventListener("click", () => {
  addCart(10);
});

allAddCart[11].addEventListener("click", () => {
  addCart(11);
});

allAddCart[12].addEventListener("click", () => {
  addCart(12);
});

allAddCart[13].addEventListener("click", () => {
  addCart(13);
});

allAddCart[14].addEventListener("click", () => {
  addCart(14);
});

allAddCart[15].addEventListener("click", () => {
  addCart(15);
});

allAddCart[16].addEventListener("click", () => {
  addCart(16);
});

allAddCart[17].addEventListener("click", () => {
  addCart(17);
});

allAddCart[18].addEventListener("click", () => {
  addCart(18);
});

allAddCart[19].addEventListener("click", () => {
  addCart(19);
});

allAddCart[20].addEventListener("click", () => {
  addCart(20);
});

allAddCart[21].addEventListener("click", () => {
  addCart(21);
});

allAddCart[21].addEventListener("click", () => {
  addCart(21);
});

allAddCart[22].addEventListener("click", () => {
  addCart(22);
});

allAddCart[23].addEventListener("click", () => {
  addCart(23);
});

allAddCart[24].addEventListener("click", () => {
  addCart(24);
});

allAddCart[25].addEventListener("click", () => {
  addCart(25);
});

allAddCart[26].addEventListener("click", () => {
  addCart(26);
});

allAddCart[27].addEventListener("click", () => {
  addCart(27);
});

allAddCart[28].addEventListener("click", () => {
  addCart(28);
});

allAddCart[29].addEventListener("click", () => {
  addCart(29);
});

allAddCart[30].addEventListener("click", () => {
  addCart(30);
});

allAddCart[31].addEventListener("click", () => {
  addCart(31);
});

allAddCart[32].addEventListener("click", () => {
  addCart(32);
});

function msg() {
  const url =
    "https://api.whatsapp.com/send?phone=6281385532791&text=Order%20%3A%0A*" +
    tampung.textContent +
    "*%20%3A%20";

  window.open(url);
}

document.getElementById("wa").addEventListener("click", () => {
  msg();
});
