
$(function() {

    $( "#spin1" ).spinner({
        min: 1,
        max: 100
    });

    $( "#spin2" ).spinner({
        minOverflow: 1,
        maxOverflow: 100,
        spin: function( e, ui ) {

            var value = ui.value,
                minOverflow = $( this ).spinner( "option", "minOverflow" ),
                maxOverflow = $( this ).spinner( "option", "maxOverflow" );

            if ( value > maxOverflow ) {
                $( this ).spinner( "value", minOverflow );
                return false;
            }
            else if ( value < minOverflow ) {
                $( this ).spinner( "value", maxOverflow );
                return false;
            }

        }
    });

});
