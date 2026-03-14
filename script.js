fetch("config.json")

.then(res => res.json())

.then(data => {

document.getElementById("schoolName").textContent=data.schoolName;
document.getElementById("schoolNameHero").textContent=data.schoolName;
document.getElementById("schoolNameFooter").textContent=data.schoolName;

document.getElementById("tagline").textContent=data.tagline;
document.getElementById("aboutText").textContent=data.about;

document.getElementById("address").textContent="Address: "+data.address;
document.getElementById("phone").textContent="Phone: "+data.phone;
document.getElementById("email").textContent="Email: "+data.email;

document.getElementById("banner").src=data.banner;

document.getElementById("map").src=data.map;

document.getElementById("facebook").href=data.facebook;
document.getElementById("instagram").href=data.instagram;
document.getElementById("youtube").href=data.youtube;

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("admissionYear").textContent="Admissions Open for "+data.admissionYear;

document.getElementById("whatsappBtn").href=
"https://wa.me/"+data.whatsapp+"?text=I want admission details";



let programs=document.getElementById("programList");

data.programs.forEach(p=>{

let div=document.createElement("div");

div.className="card";

div.innerHTML=`<h3>${p.name}</h3><p>${p.description}</p>`;

programs.appendChild(div);

});



let gallery=document.getElementById("galleryList");

data.gallery.forEach(img=>{

let i=document.createElement("img");

i.src=img;

gallery.appendChild(i);

});



let testimonials=document.getElementById("testimonialList");

data.testimonials.forEach(t=>{

let div=document.createElement("div");

div.className="card";

div.innerHTML=`<p>"${t.text}"</p><strong>- ${t.name}</strong>`;

testimonials.appendChild(div);

});

});


document.getElementById("enquiryForm").addEventListener("submit", function(e){

e.preventDefault();

let parent = this.elements[0].value;
let child = this.elements[1].value;
let phone = this.elements[2].value;
let cls = this.elements[3].value;

fetch("https://script.google.com/macros/s/AKfycbxiuHAK56M6WQjqSZcj5DCnOMng1u4n74RdhJ7CEfXz5dd0wDxTMeDXLhBzmZ5kw-CesQ/exec", {

method:"POST",

body: JSON.stringify({
parent: parent,
child: child,
phone: phone,
class: cls
})

})

.then(res => res.text())

.then(data => {

alert("Thank you! We will contact you soon.");

document.getElementById("enquiryForm").reset();

});

});