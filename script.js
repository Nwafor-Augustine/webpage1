
function phone() {
    var mychange = window.matchMedia("(max-width:600px)");
    var navdisplay = document.getElementById("aside");
    var labelshow = document.getElementById("cancel");
    var bar = document.getElementById("bar");
    var menucheck = document.getElementById("menunav");
    menucheck.addEventListener("change", function () {
        if (menucheck.checked) {
            navdisplay.classList.add("aside");
        } else {
            navdisplay.classList.remove("aside");
        }

    });
}
new fullpage('#fullpage', {
    navigation: true,
    autoScrolling: true,


});

phone();
var menuLink = $("#links")
console.log(menuLink)





if (
    document.getElementById("submit").onclick = function () {
        document.getElementById("personal").style.display = "block";

    }

) {
    document.getElementById("submit1").onclick = function () {
        document.getElementById("personal").style.display = "none";

    }
}



















