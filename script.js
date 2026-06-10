const services = [
{name:"بافت مهره",price:"150 تا 300 هزار تومان",image:"images/mehre.jpg",description:"بافت مهره رنگی و جذاب"},
{name:"بافت خورشیدی",price:"300 هزار تومان",image:"images/khorshidi.jpg",description:"مدل خورشیدی حرفه‌ای"},
{name:"بافت تل",price:"300 تا 350 هزار تومان",image:"images/tel.jpg",description:"مدل تل"},
{name:"بافت سوسکی",price:"100 هزار تومان",image:"images/soosaki.jpg",description:"مدل ساده"},
{name:"اکستنشن شاخه‌ای",price:"30 هزار تومان",image:"images/extension.jpg",description:"افزایش حجم مو"},
{name:"بافت دندون موشی",price:"1,200,000 تومان",image:"images/dandoon.jpg",description:"مدل خاص"},
{name:"بافت کویین",price:"400 هزار تومان",image:"images/queen.jpg",description:"مدل تاجی"},
{name:"بافت هلندی",price:"150 هزار تومان",image:"images/holandi.jpg",description:"بافت کلاسیک"},
{name:"بافت کف سری",price:"100 هزار تومان",image:"images/kafsari.jpg",description:"کف سر"},
{name:"بافت هلندی شل",price:"200 هزار تومان",image:"images/holandi-shol.jpg",description:"شل"},
{name:"بافت آبشاری",price:"200 هزار تومان",image:"images/abshari.jpg",description:"آبشاری"},
{name:"هلندی + کرلی",price:"750 هزار تومان",image:"images/holandi-kerli.jpg",description:"ترکیبی"},
{name:"آبشاری + کرلی",price:"750 هزار تومان",image:"images/abshari-kerli.jpg",description:"ترکیبی"},
{name:"بافت ژورنالی",price:"500 تا 1,500,000",image:"images/journal.jpg",description:"ژورنالی"},
{name:"بافت مکزیکی",price:"1,500,000",image:"images/mexici.jpg",description:"هندسی"},
{name:"بافت اسپیرال",price:"1,500,000",image:"images/spiral.jpg",description:"طنابی"},
{name:"بافت افرو",price:"2,000,000",image:"images/afro.jpg",description:"حجیم"},
{name:"بافت دردلاک",price:"1,500,000",image:"images/dreadlock.jpg",description:"خاص"}
];

const gallery = document.getElementById("gallery");

// ساخت گالری
services.forEach((item, index)=>{
gallery.innerHTML += `
<div class="card" onclick="openModal(${index})">
<img src="${item.image}" alt="">
</div>
`;
});

// باز کردن
function openModal(index){
const item = services[index];
document.getElementById("modal").style.display="flex";
document.getElementById("modalImage").src=item.image;
document.getElementById("modalTitle").innerText=item.name;
document.getElementById("modalDescription").innerText=item.description;
document.getElementById("modalPrice").innerText=item.price;
}

// بستن
function closeModal(){
document.getElementById("modal").style.display="none";
}
