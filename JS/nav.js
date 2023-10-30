$(document).ready(function () {
    var btn_HamburguesaUWU = $("#btn-menu");
    var nav = $("#nav");
    var alturaOriginal = 50;
    var alturaCambiada = 220;
    var isAlturaOriginal = true;
    var anchoLimite = 920;

    btn_HamburguesaUWU.click(function () {
        if (isAlturaOriginal) {
            nav.animate({ height: alturaCambiada }, 350);
        } else {
            nav.animate({ height: alturaOriginal }, 350);
        }

        isAlturaOriginal = !isAlturaOriginal;
        ajustarAltura();
    });

    function ajustarAltura() {
        var anchoActual = nav.width();

        if (anchoActual >= anchoLimite) {
            nav.css("height", "100px");
        }

        if (anchoActual < anchoLimite) {
            nav.css("height", "50px");
        }
    }

    ajustarAltura();

    $(window).resize(function () {
        ajustarAltura();
    });
});

