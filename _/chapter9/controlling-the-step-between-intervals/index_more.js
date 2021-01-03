
( function( $, undefined ) {

$.widget( "ab.spinner", $.ui.spinner, {

    options: {
        spinDelay: 40
    },

	_repeat: function( i, steps, event ) {

        var spinDelay = this.options.spinDelay;

		i = i || 500;

		clearTimeout( this.timer );

		this.timer = this._delay(function() {
			this._repeat( spinDelay, steps, event );
		}, i );

		this._spin( steps * this.options.step, event );

	},

});

})( jQuery );

$(function() {

    $( "#spin1" ).spinner();

    $( "#spin2" ).spinner({
        spinDelay: 80
    });

    $( "#spin3" ).spinner({
        spinDelay: 120
    });

});
