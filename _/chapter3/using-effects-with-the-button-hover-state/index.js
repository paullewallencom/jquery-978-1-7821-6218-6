
(function( $, undefined ) {

$.widget( "ab.button", $.ui.button, {

    options: {
        animateHover: false 
    },

    _create: function() {

        this._super( "create" );

        if ( !this.options.animateHover ) {
            return;
        }
     
        this._off( this.element, "mouseenter mouseleave" );

        this._on({
            mouseenter: "_mouseenter",
            mouseleave: "_mouseleave"
        });

    },

    _mouseenter: function( e ) { 
        this.element.stop( true, true )
                    .addClass( "ui-state-hover", 200 );
    },

    _mouseleave: function( e ) {
        this.element.stop( true, true )
                    .removeClass( "ui-state-hover", 100 );
    }

});

})( jQuery );

$(function() {
    $( "button" ).button( { animateHover: true } );
});
