import lang from "./lang.js";

var btn = document.querySelector('#translate');

btn.addEventListener("change",(e) => {
 
    setLanguage(e.target.value)
    localStorage.setItem("lange", e.target.value);

    console.log(localStorage.getItem("lange"))
    
})

document.addEventListener('DOMContentLoaded', ()=>{
    setLanguage(localStorage.getItem("lange"));
})
const setLanguage = (Language) => {
    const elemnts = document.querySelectorAll("[data-lang]");

    elemnts.forEach(element => {
        const key = element.getAttribute("data-lang");
        
        element.innerHTML = lang[Language][key];
    });
    const body = document.querySelector("body");
    body.dir = Language === "ar" ? "rtl": "ltr";
    
    const slider = document.querySelector(".slider");
    slider.setAttribute("dir", "ltr");
    if (Language === "ar") {
        btn.innerHTML= '<option value="ar" data-lang="arabic">العربية</option> <option value="en" data-lang="english">الانجليزية</option>'
    }else{
        btn.innerHTML= '<option value="en" data-lang="english">English</option> <option value="ar" data-lang="arabic">Arabic</option> '
    }

};