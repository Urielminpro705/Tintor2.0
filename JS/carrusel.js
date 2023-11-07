$(document).ready(function () {
    let slider1 = $("#slider1");
    let slider2 = $("#slider2");
    let f_der = $("#btn-der");
    let f_izq = $("#btn-izq");
    let b_der = $("#btn-bolita-der");
    let b_izq = $("#btn-bolita-izq");
    let pos = 0;

    function sig() {
        if (pos == 0) {
            slider1.animate({ left: "-100%" }, 400, function () {
                slider1.css("left", "100%");
            })
            slider2.animate({ left: "0" }, 400);
            b_der.addClass("bol-selec");
            b_izq.removeClass("bol-selec");
            pos = 1;

        } else {
            if (pos == 1) {
                slider1.animate({ left: "0" }, 400);
                slider2.animate({ left: "-100%" }, 400, function () {
                    slider2.css("left", "100%");
                })
                b_der.removeClass("bol-selec");
                b_izq.addClass("bol-selec");
                pos = 0;
            }
        }
    }

    function ant() {
        if (pos == 0) {
            slider2.css("left", "-100%");
            slider1.animate({ left: "100%" }, 400);
            slider2.animate({ left: "0" }, 400);
            b_der.addClass("bol-selec");
            b_izq.removeClass("bol-selec");
            pos = 1;
        } else {
            if (pos == 1) {
                slider1.css("left", "-100%");
                slider1.animate({ left: "0" }, 400)
                slider2.animate({ left: "100%" }, 400);
                b_der.removeClass("bol-selec");
                b_izq.addClass("bol-selec");
                pos = 0;
            }
        }
    }

    f_der.click(function () {
        sig();
    })

    f_izq.click(function () {
        ant();
    })

    b_der.click(function () {
        sig();
    })

    b_izq.click(function () {
        ant();
    })

})