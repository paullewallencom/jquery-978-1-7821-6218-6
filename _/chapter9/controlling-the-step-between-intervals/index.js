
$(function() {

    $( "#spin1" ).spinner({
        step: 5,
        incremental: false
    });

    $( "#spin2" ).spinner({
        step: 10,
        incremental: function( spins ) {
            if ( spins >= 10 ) {
                return 2;
            }
            return 1;
        }
    });

    $( "#spin3" ).spinner({
        step: 15,
        incremental: function( spins ) {
            var multiplier = Math.floor( spins / 100 ),
                limit = Math.pow( 10, 10 );
            if ( multiplier < limit && multiplier > 0 ) {
                return multiplier;
            }
            return 1;
        }
    });

});
