if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {
    setInterval(loop, 700);
}

var x = 0;
var titleText =(['TesTDox', 'TesTDox.', 'TesTDox.c', 'TesTDox.cl', 'TesTDox.clu', 'TesTDox.club', 'TesTDox.clu', 'TesTDox.cl', 'TesTDox.c', 'TesTDox']);

function loop() {
    x = x % titleText.length;
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++];
}

window.oncontextmenu = function () {
    console.log("Why are you here?");
    return false;
};
