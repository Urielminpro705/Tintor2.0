$(document).ready(function () {
    var btn_HamburguesaUWU = $("#btn-menu");
    var nav = $("#nav");
    var alturaOriginal = 50;
    var alturaCambiada = 200;
    var items = $(".nav-item")

    var isAlturaOriginal = true;

    btn_HamburguesaUWU.click(function () {
        if (isAlturaOriginal) {
            nav.animate({ height: alturaCambiada }, 350);
        } else {
            nav.animate({ height: alturaOriginal }, 350);
        }

        isAlturaOriginal = !isAlturaOriginal;
    });
});