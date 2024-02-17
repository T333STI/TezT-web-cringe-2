document.addEventListener("DOMContentLoaded", function () {
    setInterval(updateTitle, 700);
    window.oncontextmenu = function (event) {
        console.log("Why are you here?");
        event.preventDefault();
    };
});

var titleIndex = 0;
var titleText = ['TesTDox', 'TesTDox.', 'TesTDox.c', 'TesTDox.cl', 'TesTDox.clu', 'TesTDox.club', 'TesTDox.clu', 'TesTDox.cl', 'TesTDox.c', 'TesTDox'];

function updateTitle() {
    document.title = titleText[titleIndex++];
    titleIndex = titleIndex % titleText.length;
}
