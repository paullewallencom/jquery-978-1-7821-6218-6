$(function() {

    var input = $( "div.date-section input" ),
        button = $( "div.date-section button" );
    
    input.datepicker({
        dateFormat: "DD, MM d, yy"
    });

    button.button({
        icons: { primary: "ui-icon-calendar" }, 
        text: false
    });

    button.click( function( e ) {
        $( this ).next().datepicker( "show" )
    });

});
