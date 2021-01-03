
$(function() {

    $( "input" ).button( { icons: { primary: "ui-icon-bullet" } } );

    $( "input" ).change( function( e ) {

        var button = $( this );

        if ( button.is( ":checked" ) ) {
            button.button( "option", { icons: { primary: "ui-icon-check" } } );
        }
        else {
            button.button( "option", { icons: { primary: "ui-icon-bullet" } } );
        }

    });

});
