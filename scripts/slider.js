document.getElementById('button-left').onclick = buttonLeft;
document.getElementById('button-right').onclick = buttonRight;

let left = 0;
let lots = document.getElementById('lots');

function buttonRight() {
    left = left - 317;
    if(left < -951 - 951) {
        left = 0;
    }
    lots.style.left = left +'px';
}

function buttonLeft () {
    left = left + 317;
    if(left > 0) {
        left = -951 - 951;
    }
    lots.style.left = left +'px';
}

document.querySelector('.quote__button').onclick = changeQuote;
let quote = document.querySelectorAll('.quote__text');
var i = 0;

function changeQuote () {
    quote[i].classList.remove('quote__text--active');
    i++;
    if (i < quote.length) {
    quote[i].classList.add('quote__text--active');
    } else {
        i--;
        quote[i].classList.remove('quote__text--active');
        i = 0;
        quote[i].classList.add('quote__text--active');
    }
}

const burger = document.querySelector('#burger');
const mobileMenu = document.querySelector('#mobile__nav')
burger.addEventListener('click', function(){
    mobileMenu.classList.toggle('mobile__nav--active');
});

const userButton = document.querySelector('.header__user');
const userMenu = document.querySelector('.user-menu')
userButton.addEventListener ('click', function (){
    userMenu.classList.toggle('user-menu--active');
});

// [0]
// [1]
// [2]


// // let quote1 = document.getElementById('quote1');
// let quote2 = document.getElementById('quote2');
// let quote3 = document.getElementById('quote3');

// alert(quote2);

// quote__button.onclick = function() {
//     if (quote1.style.display == "block") {
//         quote1.style.display = "none";
//         quote2.style.display = "block";
//         quote3.style.display = "none";
//     } else if (quote2.style.display== "block") {
//         quote1.style.display = "none";
//         quote2.style.display = "none";
//         quote3.style.display = "block";
//     } else if (quote3.style.display == "block") {
//         quote1.style.display = "block";
//         quote2.style.display = "none";
//         quote3.style.display = "none";
//     } else {
//     }
// }