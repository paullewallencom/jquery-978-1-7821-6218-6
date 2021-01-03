
(function( $, undefined ) {

$.widget( "ab.buttonset", $.ui.buttonset, {

    options: {
        exploded: false
    },

    refresh: function() {

        this._super("refresh");

        if ( !this.options.exploded ) {
            return;
        }

        var buttons = this.buttons.map(function() {
            return $( this ).button( "widget" )[ 0 ];
        });

        this.element.addClass( "ui-buttonset-exploded" );
        buttons.removeClass( "ui-corner-left ui-corner-right" )
               .addClass( "ui-corner-all" );

    }
});

})( jQuery );

$(function() {
    $( "div" ).buttonset( { exploded: true } );
});
