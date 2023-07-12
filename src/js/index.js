// hamBtn

// const navigasi = document.querySelector(".navigasi");
// document.querySelector(".hamBtn").addEventListener("click", () => {
//   navigasi.classList.toggle("popup");
// });

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
const filterNav = document.querySelectorAll("#hero ul li");
const all = document.querySelectorAll(".card");
const snack = document.querySelectorAll(".snack");
const pasta = document.querySelectorAll(".pasta");
const indo = document.querySelectorAll(".indo");
const chin = document.querySelectorAll(".chinese");
const bev = document.querySelectorAll(".beverage");
const arabic = document.querySelectorAll(".arabic");

console.info(filterNav, arabic.length);

// all
filterNav[0].style.background = "lightgreen";
filterNav[0].style.color = "darkgreen";
filterNav[0].addEventListener("click", () => {
  all.forEach((element) => {
    element.style.display = "block";
    filterNav[0].style.background = "lightgreen";
    filterNav[0].style.color = "darkgreen";
    filterNav[1].style.background = "none";
    filterNav[1].style.color = "#000";
    filterNav[2].style.background = "none";
    filterNav[2].style.color = "#000";
    filterNav[3].style.background = "none";
    filterNav[3].style.color = "#000";
    filterNav[4].style.background = "none";
    filterNav[4].style.color = "#000";
    filterNav[5].style.background = "none";
    filterNav[5].style.color = "#000";
    filterNav[6].style.background = "none";
    filterNav[6].style.color = "#000";
  });
  console.info("all");
});

// snack
filterNav[1].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.display = "block";
    filterNav[0].style.background = "none";
    filterNav[0].style.color = "#000";
    filterNav[1].style.background = "lightgreen";
    filterNav[1].style.color = "darkgreen";
    filterNav[2].style.background = "none";
    filterNav[2].style.color = "#000";
    filterNav[3].style.background = "none";
    filterNav[3].style.color = "#000";
    filterNav[4].style.background = "none";
    filterNav[4].style.color = "#000";
    filterNav[5].style.background = "none";
    filterNav[5].style.color = "#000";
    filterNav[6].style.background = "none";
    filterNav[6].style.color = "#000";
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
  arabic.forEach((element) => {
    element.style.display = "none";
  });
  console.info("snack");
});
// pasta
filterNav[2].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.display = "none";
  });
  pasta.forEach((element) => {
    element.style.display = "block";
    filterNav[0].style.background = "none";
    filterNav[0].style.color = "#000";
    filterNav[1].style.background = "none";
    filterNav[1].style.color = "#000";
    filterNav[2].style.background = "lightgreen";
    filterNav[2].style.color = "darkgreen";
    filterNav[3].style.background = "none";
    filterNav[3].style.color = "#000";
    filterNav[4].style.background = "none";
    filterNav[4].style.color = "#000";
    filterNav[5].style.background = "none";
    filterNav[5].style.color = "#000";
    filterNav[6].style.background = "none";
    filterNav[6].style.color = "#000";
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
  arabic.forEach((element) => {
    element.style.display = "none";
  });
  console.info("pasta");
});
// indo
filterNav[3].addEventListener("click", () => {
  snack.forEach((element) => {
    element.style.display = "none";
  });
  pasta.forEach((element) => {
    element.style.display = "none";
  });
  indo.forEach((element) => {
    element.style.display = "block";
    filterNav[0].style.background = "none";
    filterNav[0].style.color = "#000";
    filterNav[1].style.background = "none";
    filterNav[1].style.color = "#000";
    filterNav[2].style.background = "none";
    filterNav[2].style.color = "#000";
    filterNav[3].style.background = "lightgreen";
    filterNav[3].style.color = "darkgreen";
    filterNav[4].style.background = "none";
    filterNav[4].style.color = "#000";
    filterNav[5].style.background = "none";
    filterNav[5].style.color = "#000";
    filterNav[6].style.background = "none";
    filterNav[6].style.color = "#000";
  });
  chin.forEach((element) => {
    element.style.display = "none";
  });
  bev.forEach((element) => {
    element.style.display = "none";
  });
  arabic.forEach((element) => {
    element.style.display = "none";
  });
  console.info("indo");
});
// chin
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
    filterNav[0].style.background = "none";
    filterNav[0].style.color = "#000";
    filterNav[1].style.background = "none";
    filterNav[1].style.color = "#000";
    filterNav[2].style.background = "none";
    filterNav[2].style.color = "#000";
    filterNav[3].style.background = "none";
    filterNav[3].style.color = "#000";
    filterNav[4].style.background = "lightgreen";
    filterNav[4].style.color = "darkgreen";
    filterNav[5].style.background = "none";
    filterNav[5].style.color = "#000";
    filterNav[6].style.background = "none";
    filterNav[6].style.color = "#000";
  });
  bev.forEach((element) => {
    element.style.display = "none";
  });
  arabic.forEach((element) => {
    element.style.display = "none";
  });
  console.info("chin");
});
// bev
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
    filterNav[0].style.background = "none";
    filterNav[0].style.color = "#000";
    filterNav[1].style.background = "none";
    filterNav[1].style.color = "#000";
    filterNav[2].style.background = "none";
    filterNav[2].style.color = "#000";
    filterNav[3].style.background = "none";
    filterNav[3].style.color = "#000";
    filterNav[4].style.background = "none";
    filterNav[4].style.color = "#000";
    filterNav[5].style.background = "lightgreen";
    filterNav[5].style.color = "darkgreen";
    filterNav[6].style.background = "none";
    filterNav[6].style.color = "#000";
  });
  arabic.forEach((element) => {
    element.style.display = "none";
  });
  console.info("chin");
});
// arabic
filterNav[6].addEventListener("click", () => {
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
    element.style.display = "none";
  });
  arabic.forEach((element) => {
    element.style.display = "block";
    filterNav[0].style.background = "none";
    filterNav[0].style.color = "#000";
    filterNav[1].style.background = "none";
    filterNav[1].style.color = "#000";
    filterNav[2].style.background = "none";
    filterNav[2].style.color = "#000";
    filterNav[3].style.background = "none";
    filterNav[3].style.color = "#000";
    filterNav[4].style.background = "none";
    filterNav[4].style.color = "#000";
    filterNav[5].style.background = "none";
    filterNav[5].style.color = "#000";
    filterNav[6].style.background = "lightgreen";
    filterNav[6].style.color = "darkgreen";
  });
  console.info("arabic");
});

console.info(list.length);

// open notif cart orderan
const cartPlace = document.getElementById("cart-place");
const orderan = document.getElementById("orderan");

function notifAddToCart() {
  cartPlace.classList.toggle("up");
}

function viewOrder() {
  notifAddToCart();
}

function closeCartDetail() {
  notifAddToCart();
}

orderan.addEventListener("click", () => {
  notifAddToCart();
  console.info("oke");
});

// check item on cart
const allAddCart = document.querySelectorAll(".card .addCart");
const menuName = document.querySelectorAll(".title p");
const qty = document.querySelectorAll(".qty");
const arrMenuName = [];
const arrQty = [];
const tampung = document.querySelector(".tampung");
let orderNotif = document.querySelector("#orderan .numb");
const locList = document.querySelector("#cart-place .row ul");
const notifAdd = document.querySelector(".notifAddCart");
allAddCart.forEach((countOrder) => {
  countOrder.addEventListener("click", () => {
    orderNotif.innerHTML = arrMenuName.length + 1;
    orderNotif.style.background = "red";
    orderNotif.style.color = "#fff";
    notifAdd.classList.add("modal");
    setTimeout(() => {
      notifAdd.classList.remove("modal");
    }, 2000);
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
  locList.appendChild(addList);
  let node;
  node = textList.cloneNode(true);
  tampung.appendChild(node);
  console.info(tampung);
}

allAddCart[0].addEventListener("click", () => {
  addCart(0);
  // console.info(tampung);
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

allAddCart[33].addEventListener("click", () => {
  addCart(33);
});

allAddCart[34].addEventListener("click", () => {
  addCart(34);
});

allAddCart[35].addEventListener("click", () => {
  addCart(35);
});

allAddCart[36].addEventListener("click", () => {
  addCart(36);
});

allAddCart[37].addEventListener("click", () => {
  addCart(37);
});

allAddCart[38].addEventListener("click", () => {
  addCart(38);
});

allAddCart[39].addEventListener("click", () => {
  addCart(39);
});

allAddCart[40].addEventListener("click", () => {
  addCart(40);
});

allAddCart[41].addEventListener("click", () => {
  addCart(41);
});

allAddCart[42].addEventListener("click", () => {
  addCart(42);
});

allAddCart[43].addEventListener("click", () => {
  addCart(43);
});

allAddCart[44].addEventListener("click", () => {
  addCart(44);
});

allAddCart[45].addEventListener("click", () => {
  addCart(45);
});

allAddCart[46].addEventListener("click", () => {
  addCart(46);
});

allAddCart[47].addEventListener("click", () => {
  addCart(47);
});

allAddCart[48].addEventListener("click", () => {
  addCart(48);
});

allAddCart[49].addEventListener("click", () => {
  addCart(49);
});

allAddCart[50].addEventListener("click", () => {
  addCart(50);
});

allAddCart[51].addEventListener("click", () => {
  addCart(51);
});

allAddCart[52].addEventListener("click", () => {
  addCart(52);
});

allAddCart[53].addEventListener("click", () => {
  addCart(53);
});

allAddCart[54].addEventListener("click", () => {
  addCart(54);
});

allAddCart[55].addEventListener("click", () => {
  addCart(55);
});

allAddCart[56].addEventListener("click", () => {
  addCart(56);
});

allAddCart[57].addEventListener("click", () => {
  addCart(57);
});

allAddCart[58].addEventListener("click", () => {
  addCart(58);
});

allAddCart[59].addEventListener("click", () => {
  addCart(59);
});

allAddCart[60].addEventListener("click", () => {
  addCart(60);
});

allAddCart[61].addEventListener("click", () => {
  addCart(61);
});

allAddCart[62].addEventListener("click", () => {
  addCart(62);
});

allAddCart[63].addEventListener("click", () => {
  addCart(63);
});

allAddCart[64].addEventListener("click", () => {
  addCart(64);
});

allAddCart[65].addEventListener("click", () => {
  addCart(65);
});

allAddCart[66].addEventListener("click", () => {
  addCart(66);
});

allAddCart[67].addEventListener("click", () => {
  addCart(67);
});

allAddCart[68].addEventListener("click", () => {
  addCart(68);
});

allAddCart[69].addEventListener("click", () => {
  addCart(69);
});

allAddCart[70].addEventListener("click", () => {
  addCart(70);
});

allAddCart[71].addEventListener("click", () => {
  addCart(71);
});

allAddCart[72].addEventListener("click", () => {
  addCart(72);
});

allAddCart[73].addEventListener("click", () => {
  addCart(73);
});

allAddCart[74].addEventListener("click", () => {
  addCart(74);
});

allAddCart[75].addEventListener("click", () => {
  addCart(75);
});

allAddCart[76].addEventListener("click", () => {
  addCart(76);
});

allAddCart[77].addEventListener("click", () => {
  addCart(77);
});

allAddCart[78].addEventListener("click", () => {
  addCart(78);
});

allAddCart[79].addEventListener("click", () => {
  addCart(79);
});

allAddCart[80].addEventListener("click", () => {
  addCart(80);
});

allAddCart[81].addEventListener("click", () => {
  addCart(81);
});

allAddCart[82].addEventListener("click", () => {
  addCart(82);
});

// customer data

function nextStep() {
  const rulesModal = document.getElementById("rules");
  rulesModal.style.display = "none";
  setTimeout(() => {
    const popName = prompt("Input Your Name \n(Masukkan Nama Kamu)");
    const popArea = prompt(
      "Input Your Room or Area \n(Masukkan No. Kamar atau Nama Area)"
    );
    document.getElementById("customer").innerHTML = popName;
    document.getElementById("area").innerHTML = popArea;
  }, 1000);
}

const remark = document.getElementById("remark");
const wa = document.getElementById("wa");

function msg() {
  const url =
    "https://api.whatsapp.com/send?phone=6281385532791&text=Hi%2C%20Grand%20Ussu.%20Saya%20Mau%20Order%20Ya%20!!!%0ANama%20%3A%20*" +
    customer.textContent +
    "*%0AArea%20%3A%20*" +
    area.textContent +
    "*%0APesan%20Tambahan%20%3A%20*" +
    remark.value +
    "*%0ASaya%20Pesan%20%3A%20%0A*" +
    tampung.textContent +
    "*%0A%0A%0A*)%20Pembayaran%20dilakukan%20setelah%20pesanan%20dipastikan%20benar%2C%20melalui%0A-%20Bank%20Transfer%0A-%20BNI%20QRIS%0A-%20Debet%20%2F%20Credit%20Card%0A%0A";
  tampung.textContent = "";
  orderNotif.textContent = "";
  locList.textContent = "";
  orderNotif.style.background = "none";
  cartPlace.classList.toggle("up");

  window.open(url);
}

wa.addEventListener("click", () => {
  msg();
  cartPlace.classList.remove("up");
});

document.getElementById("reset").addEventListener("click", (e) => {
  arrMenuName.splice(0, arrMenuName.length);
  arrQty.splice(0, arrQty.length);
  tampung.textContent = "";
  orderNotif.textContent = "";
  locList.textContent = "";
  qty.forEach((element) => {
    element.value = 1;
  });
  orderNotif.style.background = "none";
  cartPlace.classList.toggle("up");
});

// stopping reload when press enter
function stopReload(e) {
  switch (e.key) {
    case "Enter":
      e.preventDefault();
      break;

    default:
      break;
  }
}

document.addEventListener("keydown", stopReload);
