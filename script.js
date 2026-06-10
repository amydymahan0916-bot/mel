const data = [
  {
    img: "images/profile.jpg",
    title: "عکس پروفایل",
    desc: "نمونه کار",
    price: ""
  },
  {
    img: "images/mehre.jpg",
    title: "بافت مهره",
    desc: "بافت حرفه‌ای و ترند",
    price: ""
  },
  {
    img: "images/khorshidi.jpg",
    title: "بافت خورشیدی",
    desc: "مدل خاص ژورنالی",
    price: ""
  },
  {
    img: "images/tel.jpg",
    title: "بافت تل",
    desc: "مناسب مجالس",
    price: ""
  },
  {
    img: "images/soosaki.jpg",
    title: "بافت سوسکی",
    desc: "استایل خاص",
    price: ""
  },
  {
    img: "images/extension.jpg",
    title: "اکستنشن شاخه‌ای",
    desc: "اکستنشن طبیعی",
    price: ""
  },
  {
    img: "images/dandoon.jpg",
    title: "بافت دندون موشی",
    desc: "بافت فانتزی",
    price: ""
  },
  {
    img: "images/queen.jpg",
    title: "بافت کویین",
    desc: "مدل سلطنتی",
    price: ""
  },
  {
    img: "images/holandi.jpg",
    title: "بافت هلندی",
    desc: "پرطرفدار",
    price: ""
  },
  {
    img: "images/kafsari.jpg",
    title: "بافت کف سری",
    desc: "مدل کف سر",
    price: ""
  },
  {
    img: "images/holandi-shol.jpg",
    title: "بافت هلندی شل",
    desc: "استایل آزاد",
    price: ""
  },
  {
    img: "images/abshari.jpg",
    title: "بافت آبشاری",
    desc: "خیلی شیک",
    price: ""
  },
  {
    img: "images/holandi-kerli.jpg",
    title: "هلندی شل + کرلی",
    desc: "ترکیبی خاص",
    price: ""
  },
  {
    img: "images/abshari-kerli.jpg",
    title: "آبشاری + کرلی",
    desc: "مدل مجلسی",
    price: ""
  },
  {
    img: "images/journal.jpg",
    title: "بافت ژورنالی",
    desc: "مدل حرفه‌ای",
    price: ""
  },
  {
    img: "images/mexici.jpg",
    title: "بافت مکزیکی",
    desc: "مدل خارجی",
    price: ""
  },
  {
    img: "images/spiral.jpg",
    title: "بافت اسپیرال",
    desc: "چرخشی خاص",
    price: ""
  },
  {
    img: "images/afro.jpg",
    title: "بافت افرو",
    desc: "حجم‌دار و خاص",
    price: ""
  },
  {
    img: "images/dreadlock.jpg",
    title: "بافت دردلاک",
    desc: "سبک خاص",
    price: ""
  }
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");

data.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <img src="${item.img}" onclick="openModal(${index})">
    <h3>${item.title}</h3>
  `;

  gallery.appendChild(div);
});

function openModal(index) {
  const item = data[index];

  document.getElementById("modalImage").src = item.img;
  document.getElementById("modalTitle").innerText = item.title;
  document.getElementById("modalDescription").innerText = item.desc;
  document.getElementById("modalPrice").innerText = item.price;

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function showOrder() {
  document.getElementById("orderBox").style.display = "block";
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("کپی شد ✔");
}
