
window.addEventListener("click", function () {
    var p1 = Math.floor((Math.random() * 6) + 1);
    var p2 = Math.floor((Math.random() * 6) + 1);
    document.getElementsByClassName("img1")[0].src = "images\\dice" + p1 + ".png";
    document.getElementsByClassName("img2")[0].src = "images\\dice" + p2 + ".png";
    if (p1 > p2) {
        document.getElementsByTagName("h1")[0].innerText = "Hooray Player 1 wins.";
    }
    if (p2 > p1) {
        document.getElementsByTagName("h1")[0].innerText = "Hooray Player 2 wins.";
    }
    if(p1==p2) {
        document.getElementsByTagName("h1")[0].innerText = "Oops Draw";
    }
});