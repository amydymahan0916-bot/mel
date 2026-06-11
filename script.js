const services = [

{
name:"بافت مهره",
price:"150 تا 300 هزار تومان",
image:"mehre.jpg",
description:"بافت مهره با مهره های رنگی و جذاب که به صورت لاین روی مو اجرا می‌شود و زیبایی خاصی به موها می‌دهد."
},

{
name:"بافت خورشیدی",
price:"300 هزار تومان",
image:"khorshidi.jpg",
description:"مدلی مشابه بافت هلندی اما با تقسیم بندی متفاوت و حرفه ای."
},

{
name:"بافت تل",
price:"300 تا 350 هزار تومان",
image:"tel.jpg",
description:"تل یک طرفه، تل خورشیدی و مدل های متنوع دیگر."
},

{
name:"بافت سوسکی",
price:"100 هزار تومان",
image:"soosaki.jpg",
description:"مدلی ساده و جذاب برای استفاده روزمره."
},

{
name:"اکستنشن شاخه ای",
price:"30 هزار تومان هر شاخه",
image:"extension.jpg",
description:"افزایش حجم و قد مو با اکستنشن حرفه ای."
},

{
name:"بافت دندون موشی",
price:"1,200,000 تومان",
image:"dandoon.jpg",
description:"مدلی حرفه ای و خاص."
},

{
name:"بافت کویین",
price:"400 هزار تومان",
image:"queen.jpg",
description:"بافت برجسته و سه بعدی با حالت تاج گونه."
},

{
name:"بافت هلندی",
price:"150 هزار تومان هر لاین",
image:"holandi.jpg",
description:"قابل اجرا با نخ، مهره و حلقه."
},

{
name:"بافت کف سری",
price:"100 هزار تومان هر لاین",
image:"kafsari.jpg",
description:"مدل حرفه ای کف سر با ماندگاری بالا."
},

{
name:"بافت هلندی شل",
price:"200 هزار تومان",
image:"holandi-shol.jpg",
description:"مناسب مهمانی ها و مراسمات."
},

{
name:"بافت آبشاری",
price:"200 هزار تومان",
image:"abshari.jpg",
description:"مدل محبوب آبشاری."
},

{
name:"هلندی شل + کرلی",
price:"750 هزار تومان",
image:"holandi-kerli.jpg",
description:"ترکیب بافت و حالت دهی حرفه ای."
},

{
name:"آبشاری + کرلی",
price:"750 هزار تومان",
image:"abshari-kerli.jpg",
description:"بافت آبشاری همراه با کرلی."
},

{
name:"بافت ژورنالی",
price:"500 تا 1500 هزار تومان",
image:"journal.jpg",
description:"مدل های خاص و ژورنالی."
},

{
name:"بافت مکزیکی",
price:"1,500,000 تومان",
image:"mexici.jpg",
description:"بافت آفریقایی با اشکال هندسی خاص."
},

{
name:"بافت اسپیرال",
price:"1,500,000 تومان",
image:"spiral.jpg",
description:"مدل طنابی و تابستانی."
},

{
name:"بافت افرو",
price:"2,000,000 تومان",
image:"afro.jpg",
description:"حجم دهی فوق العاده به مو."
},

{
name:"بافت دردلاک",
price:"1,500,000 تومان",
image:"dreadlock.jpg",
description:"مدل سرخپوستی خاص."
}

];

const gallery = document.getElementById("gallery");

services.forEach((item,index)=>{

gallery.innerHTML += `

<div class="card" onclick="openService(${index})">

<img src="${item.image}" alt="${item.name}">

<div class="card-title">
${item.name}
</div>

</div>

`;

});

function openService(index){

localStorage.setItem(
"selectedService",
JSON.stringify(services[index])
);

window.location.href="service.html";

}
