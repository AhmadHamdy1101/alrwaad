





/* responsed menu */

const openMenu = document.querySelector('.openMenu');
const Menu = document.querySelector('nav');


openMenu.addEventListener('click',function(){
    Menu.classList.toggle('open');
    
})

/*function make menu close when click on Escape puttom on keypord*/

document.onkeyup =function (e) {
    if (e.key === "Escape") {
        Menu.classList.remove("open");
    };
};


/*animation function*/
const fade_right = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add('faded_right')
        }else{
            entry.target.classList.remove('faded_right')

        }
    })
})
const fade_right_Item = document.querySelectorAll('.fade_right')
fade_right_Item.forEach((el) => fade_right.observe(el));

const fade_left = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add('faded_left')
        }else{
            entry.target.classList.remove('faded_left')

        }
    })
})
const fade_left_Item = document.querySelectorAll('.fade_left')
fade_left_Item.forEach((el) => fade_left.observe(el));


const fade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add('faded')
        }else{
            entry.target.classList.remove('faded')

        }
    })
})
const fadeItems = document.querySelectorAll('.fade')
fadeItems.forEach((el) => fade.observe(el));



const zoomOut = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add('zoomed_out')
        }else{
            entry.target.classList.remove('zoomed_out')

        }
    })
})
const zoom_out = document.querySelectorAll('.zoomOut')
zoom_out.forEach((el) => zoomOut.observe(el));






const zoomed_in = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      
        if(entry.isIntersecting){
            entry.target.classList.add('zoomed_in')
        }else{
            entry.target.classList.remove('zoomed_in')

        }
    })
})
const zoom_in_Item = document.querySelectorAll('.zoomIn')
zoom_in_Item.forEach((el) => zoomed_in.observe(el));
