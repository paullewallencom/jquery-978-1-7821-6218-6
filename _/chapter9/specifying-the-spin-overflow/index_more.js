
$(function() {

    $( "#spin" ).spinner({
        min: 1,
        max: 100,
        spin: function( e, ui ) {

            var value = ui.value,
                buttons = $( this ).data( "uiSpinner" ).buttons,
                min = $( this ).spinner( "option", "min" ),
                max = $( this ).spinner( "option", "max" );

            if ( value === max ) {
                buttons.filter( ".ui-spinner-up:not(.ui-state-disabled)" )
                       .button( "disable" );
            }
            else if ( value === min ) {
                buttons.filter( ".ui-spinner-down:not(.ui-state-disabled)" )
                       .button( "disable" );
            }
            else {
                buttons.filter( ".ui-state-disabled" )
                       .button( "enable" );
            }

        }
    });

});
