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
image:"khorshidi.jpg",
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
description:"اکستنشن بافت شاخه ای جهت افزایش حجم و قد مو. دورتادور سر قابل اجرا است."
},

{
name:"بافت دندون موشی",
price:"1,200,000 تومان",
image:"images/dandoon.jpg",
description:"مدلی حرفه ای و خاص که جلوه ای متفاوت و جذاب به موها می‌بخشد."
},

{
name:"بافت کویین",
price:"400 هزار تومان",
image:"images/queen.jpg",
description:"بافت برجسته و سه بعدی با حالت تاج گونه. مناسب مراسم، مهمانی و عروسی."
},

{
name:"بافت هلندی",
price:"150 هزار تومان هر لاین",
image:"images/holandi.jpg",
description:"قابل اجرا با موی اضافه، نخ، مهره و حلقه برای ایجاد ظاهری خاص."
},

{
name:"بافت کف سری",
price:"100 هزار تومان هر لاین",
image:"images/kafsari.jpg",
description:"بافت حرفه ای کف سر با ماندگاری بالا و ظاهر مرتب."
},

{
name:"بافت هلندی شل",
price:"200 هزار تومان",
image:"images/holandi-shol.jpg",
description:"مدلی شیک و مناسب مهمانی ها و مراسمات."
},

{
name:"بافت آبشاری",
price:"200 هزار تومان",
image:"images/abshari.jpg",
description:"مدل محبوب آبشاری مناسب مراسم و استایل های دخترانه."
},

{
name:"هلندی شل + کرلی یا اتو",
price:"750 هزار تومان",
image:"images/holandi-kerli.jpg",
description:"ترکیب بافت هلندی شل با کرلی یا اتوی حرفه ای."
},

{
name:"آبشاری + کرلی یا اتو",
price:"750 هزار تومان",
image:"images/abshari-kerli.jpg",
description:"بافت آبشاری همراه با حالت دهی حرفه ای برای مراسمات."
},

{
name:"بافت ژورنالی",
price:"500 هزار تا 1,500,000 تومان",
image:"images/journal.jpg",
description:"مدل های خاص و ژورنالی مناسب عکاسی، جشن و مراسم."
},

{
name:"بافت مکزیکی",
price:"1,500,000 تومان",
image:"mexici.jpg",
description:"نوعی بافت آفریقایی با اشکال هندسی خاص مانند مربع، مثلث و لوزی. قابل اجرا با موهای طبیعی یا اضافه."
},

{
name:"بافت اسپیرال",
price:"1,500,000 تومان",
image:"images/spiral.jpg",
description:"بافت طنابی یا اسپیرال. مدلی شیک و مناسب تابستان و مسافرت."
},

{
name:"بافت افرو",
price:"2,000,000 تومان",
image:"images/afro.jpg",
description:"مدلی حجیم و خاص که باعث پرپشت تر دیده شدن موها می‌شود."
},

{
name:"بافت دردلاک",
price:"1,500,000 تومان",
image:"images/dreadlock.jpg",
description:"مدلی الهام گرفته از بافت های سرخپوستی با ظاهری متفاوت و خاص."
}

];

const gallery = document.getElementById("gallery");

services.forEach(item => {

gallery.innerHTML += 

<div class="card" onclick='openModal(${JSON.stringify(item)})'>

<img src="${item.image}" alt="${item.name}">

</div>

;

});

function openModal(item){

document.getElementById("modal").style.display="flex";

document.getElementById("modalTitle").innerText=item.name;

document.getElementById("modalDescription").innerText=item.description;

document.getElementById("modalPrice").innerText=item.price;

document.getElementById("modalImage").src=item.image;

document.getElementById("orderBox").style.display="none";

}

function closeModal(){

document.getElementById("modal").style.display="none";

}

function showOrder(){

document.getElementById("orderBox").style.display="block";

}

function copyText(text){

navigator.clipboard.writeText(text);

alert("کپی شد ✅");

}

window.onclick = function(event){

const modal = document.getElementById("modal");

if(event.target == modal){

modal.style.display = "none";

}

  }
