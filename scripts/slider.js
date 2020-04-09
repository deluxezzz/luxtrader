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
        left = -951 -951;
    }
    lots.style.left = left +'px';
}

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