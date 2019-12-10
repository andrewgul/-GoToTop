var backNumber = 1;
var backgroundsTotal = 5;

function buttonRightPressed() {
    var slider = document.getElementById("slider");
    if (backNumber < backgroundsTotal) {
        backNumber++;
    }
    else
    {
        backNumber = 1;
    }
    slider.style.backgroundImage = "url('backgrounds/back" + backNumber + ".jpg')";
}

function buttonLeftPressed() {
    var slider = document.getElementById("slider");
    if (backNumber > 1) {
        backNumber--;
    }
    else
    {
        backNumber = backgroundsTotal;
    }
    slider.style.backgroundImage = "url('backgrounds/back" + backNumber + ".jpg')";
}