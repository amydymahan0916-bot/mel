const services = [
{
name:"بافت مهره",
price:"150 تا 300 هزار تومان",
image:"images/mehre.jpg",
description:"بافت مهره با مهره های رنگی و جذاب که به صورت لاین روی مو اجرا می‌شود و زیبایی خاصی به موها می‌دهد. قیمت بسته به قد مو متغیر است."
},
{
name:"بافت خورشیدی",
price:"300 هزار تومان",
image:"images/khorshidi.jpg",
description:"مدلی مشابه بافت هلندی اما با تقسیم بندی متفاوت و حرفه ای که ظاهر زیبایی روی مو ایجاد می‌کند."
},
{
name:"بافت تل",
price:"300 تا 350 هزار تومان",
image:"images/tel.jpg",
description:"شامل تل یک طرفه، تل خورشیدی و مدل های متنوع دیگر. قابل اجرا با موی رنگی و مهره."
},
{
name:"بافت سوسکی",
price:"100 هزار تومان",
image:"images/soosaki.jpg",
description:"مدلی ساده، زیبا و پرطرفدار برای استفاده روزمره."
},
{
name:"اکستنشن شاخه ای",
price:"30 هزار تومان هر شاخه",
image:"images/extension.jpg",
description:"اکستنشن بافت شاخه ای جهت افزایش حجم و قد مو."
},
{
name:"بافت دندون موشی",
price:"1,200,000 تومان",
image:"images/dandoon.jpg",
description:"مدلی حرفه ای و خاص."
},
{
name:"بافت کویین",
price:"400 هزار تومان",
image:"images/queen.jpg",
description:"بافت برجسته و سه بعدی."
},
{
name:"بافت هلندی",
price:"150 هزار تومان هر لاین",
image:"images/holandi.jpg",
description:"بافت کلاسیک هلندی."
},
{
name:"بافت کف سری",
price:"100 هزار تومان هر لاین",
image:"images/kafsari.jpg",
description:"بافت کف سر حرفه ای."
},
{
name:"بافت هلندی شل",
price:"200 هزار تومان",
image:"images/holandi-shol.jpg",
description:"مدل شل و شیک."
},
{
name:"بافت آبشاری",
price:"200 هزار تومان",
image:"images/abshari.jpg",
description:"مدل آبشاری زیبا."
},
{
name:"هلندی شل + کرلی",
price:"750 هزار تومان",
image:"images/holandi-kerli.jpg",
description:"ترکیب بافت و کرلی."
},
{
name:"آبشاری + کرلی",
price:"750 هزار تومان",
image:"images/abshari-kerli.jpg",
description:"مدل ترکیبی."
},
{
name:"بافت ژورنالی",
price:"500 هزار تا 1,500,000 تومان",
image:"images/journal.jpg",
description:"مدل های خاص ژورنالی."
},
{
name:"بافت مکزیکی",
price:"1,500,000 تومان",
image:"images/mexici.jpg",
description:"بافت هندسی خاص."
},
{
name:"بافت اسپیرال",
price:"1,500,000 تومان",
image:"images/spiral.jpg",
description:"بافت طنابی."
},
{
name:"بافت افرو",
price:"2,000,000 تومان",
image:"images/afro.jpg",
description:"مدل حجیم و خاص."
},
{
name:"بافت دردلاک",
price:"1,500,000 تومان",
image:"images/dreadlock.jpg",
description:"مدل خاص دردلاک."
}
];

// نمایش گالری
const gallery = document.getElementById("gallery");

services.forEach((item, index) => {
gallery.innerHTML += `
<div class="card" onclick="openModal(${index})">
  <img src="${item.image}" alt="${item.name}">
</div>
`;
});

// باز کردن مودال
function openModal(index){
const item = services[index];

document.getElementById("modal").style.display="flex";
document.getElementById("modalTitle").innerText=item.name;
document.getElementById("modalDescription").innerText=item.description;
document.getElementById("modalPrice").innerText=item.price;
document.getElementById("modalImage").src=item.image;

document.getElementById("orderBox").style.display="none";
}

// بستن مودال
function closeModal(){
document.getElementById("modal").style.display="none";
}

// نمایش سفارش
function showOrder(){
document.getElementById("orderBox").style.display="block";
}

// کپی شماره
function copyText(text){
navigator.clipboard.writeText(text);
alert("کپی شد ✅");
}

// بستن با کلیک بیرون
window.onclick = function(event){
const modal = document.getElementById("modal");
if(event.target == modal){
modal.style.display = "none";
}
}
