
$(function() {

    $( "button" ).tooltip();

    $( "button.drop" ).tooltip( "option", {
        show: {
            effect: "drop",
            delay: 150,
            duration: 450,
            direction: "up",
        },
        hide: {
            effect: "drop",
            delay: 100,
            duration: 200,
            direction: "down"
        }
    });

    $( "button.slide" ).tooltip( "option", {
        show: {
            effect: "slide",
            delay: 250,
            duration: 350,
            direction: "left"
        },
        hide: {
            effect: "slide",
            delay: 150,
            duration: 350,
            direction: "right",
        }
    });

    $( "button.explode" ).tooltip( "option", {
        show: {
            effect: "clip",
            delay: 150,
            duration: 450
        },
        hide: {
            effect: "explode",
            delay: 200,
            duration: 1000
        }
    });

});
