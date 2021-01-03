
$(function() {

    $( "button" ).tooltip();

    $( "button.tt-highlight" ).tooltip( "option", { 
        tooltipClass: "ui-state-highlight" 
    });

    $( "button.tt-error" ).tooltip( "option", {
        tooltipClass: "ui-state-error"
    });

});
