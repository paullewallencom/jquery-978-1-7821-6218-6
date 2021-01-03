
(function( $, undefined ) {

$.widget( "ab.tabs", $.ui.tabs, {

    _create: function() {

        this._super();

        this._on( window, { 
            hashchange: $.proxy( this, "_hashChange" )
        });

    },

    _hashChange: function( e ) {

        if ( this.active.attr( "href" ) === location.hash ) {
            return;
        }

        this._activate( this._getIndex( location.hash ) );

    },

    _eventHandler: function( e ) {

        this._super( e );  

        var href = $( e.target ).attr( "href" );

        if ( href === location.hash ) {
            return;
        }

        if ( href.indexOf( "#" ) === 0 ) {
            location.hash = href;
        }
        else {
            location.hash = "";
        }

    }
   
});

})( jQuery );

$(function() {

    $( "#tabs" ).tabs();

});
