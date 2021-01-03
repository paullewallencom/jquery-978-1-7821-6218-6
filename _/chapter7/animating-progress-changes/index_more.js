
(function( $, undefined ) {

$.widget( "ab.progressbar", $.ui.progressbar, {

    options: {
        animate: false
    },

	_create: function() {

        this._super();

        if ( !this.options.animate ) {
            return;
        }

        this.element.addClass( "ui-progressbar-animated" );

	}

});

})( jQuery );

$(function() {

    $( "#progress" ).progressbar( { animate: true } );

    var timer;

    var updater = function() {

        var value = $( "#progress" ).progressbar( "value" ) + 10,
            maximum = $( "#progress" ).progressbar( "option", "max" );

        if ( value >= maximum ) {
            $( "#progress" ).progressbar( "value", maximum );
            return;
        }

        $( "#progress" ).progressbar( "value", value );
        timer = setTimeout( updater, 700 );

    };
    
    timer = setTimeout( updater, 700 );

});
