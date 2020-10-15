


var navdisplay = document.getElementById("aside");
var labelshow = document.getElementById("cancel");
var bar = document.getElementById("bar");
var menucheck = document.getElementById("menunav");
menucheck.addEventListener('change', function () {
    if (menucheck.checked) {
        bar.style.left = "-2250px";
        navdisplay.style.left = "10px";
        labelshow.style.display = "block"
    } else {
        navdisplay.style.left = "-250px";
        bar.style.left = "85%";
        labelshow.style.display = "none";
    }
})





