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
