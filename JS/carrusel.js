$(document).ready(function () {
    let slider1 = $("#slider1");
    let slider2 = $("#slider2");
    let sig = $("#btn-der");
    let ant = $("#btn-izq");
    let n_img = 2;
    let i = 0;

    sig.click(function () {
        slider1.animate({left: "-100%"}, 400)
        slider2.animate({left: "0"}, 400)
    })

    ant.click(function () {
        slider1.animate({left: "0"}, 400)
        slider2.animate({left: "100%"}, 400)
    })

})