

$(function() {

    $( "#vslider" ).slider({
        orientation: "vertical",
        range: "min",
        min: 1,
        max: 200,
        value: 128
    });

    $( "#hslider" ).slider({
        range: "min",
        min: 0,
        max: 200,
        value: 128
    });

});
