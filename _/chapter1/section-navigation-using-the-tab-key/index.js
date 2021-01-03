(function( $, undefined ) {

$.widget( "ab.accordion", $.ui.accordion, {

    _create: function () {

        this._super( "_create" );
        this._on( this.headers, { keydown: "_tabkeydown" } );

    },

    _tabkeydown: function ( event ) {

		if ( event.altKey || event.ctrlKey ) {
			return;
		}

        if ( event.keyCode !== $.ui.keyCode.TAB ) {
            return;
        }

		var headers = this.headers,
            headerLength = headers.length,
			headerIndex = headers.index( event.target ),
			toFocus = false;

        if ( event.shiftKey && headerIndex - 1 >= 0 ) {
            toFocus = headers[ headerIndex - 1 ];
        }

        if ( !event.shiftKey && headerIndex + 1 < headerLength ) {
		    toFocus = headers[ headerIndex + 1 ];
        }

		if ( toFocus ) {

			$( event.target ).attr( "tabIndex", -1 );
			$( toFocus ).attr( "tabIndex", 0 );
			toFocus.focus();
			event.preventDefault();

		}

    }

});

})( jQuery );

$(function() {

	$( "#accordion" ).accordion({
		collapsible: true
	});

});
