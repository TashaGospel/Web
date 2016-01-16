function myAnimate() {
    var elem = document.getElementById("animation");
    var pos = 0;
    var id = setInterval(function() {
        if (pos == 350) clearInterval(id);
        else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }, 5);
}
