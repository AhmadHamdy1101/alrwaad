/*start slider carousel */
const slider = document.querySelector('.slides');
const sliderImg = document.querySelectorAll('.slides img');


let counter = 1;
const size = sliderImg[0].clientWidth;


slider.style.transform= 'translateX('+ (-size * counter)+'px)';

/*      make loop for slides      */
slider.addEventListener('transitionend',function(){
    if (sliderImg[counter].id == 'last-slide') {
        slider.style.transition='none';
        counter = sliderImg.length -2;
        slider.style.transform= 'translateX('+ (-   size * counter)+'px)';
    }
    if (sliderImg[counter].id == 'first-slide') {
        slider.style.transition='none';
        counter = sliderImg.length - counter;
        slider.style.transform= 'translateX('+ (-   size * counter)+'px)';
    }
})


/* make autoplay for slider */

setInterval(function () {
    if(counter >= sliderImg.length -1)return;
    slider.style.transition='transform 0.8s ease-in-out';
    counter++;
    slider.style.transform= 'translateX('+ (-size * counter)+'px)';
},3500)
/*end slider carousel */