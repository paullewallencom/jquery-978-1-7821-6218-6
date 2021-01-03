
(function( $, undefined ) {

$.widget( "ab.button", $.ui.button, {

    options: {
        matchWidth: false
    },

    _create: function() {

        this._super( "create" );

        if ( !this.options.matchWidth ) {
            return;
        }

        this.element.siblings( ":" + this.widgetFullName )
                    .addBack()
                    .button( "refresh" );

    },

    refresh: function() {

        this._super( "refresh" );

        if ( !this.options.matchWidth ) {
            return;
        }
    
        var widths = this.element
                         .siblings( ":" + this.widgetFullName )
                         .addBack()
                         .children( ".ui-button-text" )
                         .map(function() {
                            return $( this ).width();
                         }),
            maxWidth = Math.max.apply( Math, widths ),
            buttonText = this.element.children( ".ui-button-text" );

        if ( buttonText.width() < maxWidth ) {
            buttonText.width( maxWidth );
        }

    }

});

})( jQuery );

$(function() {
    $( "button" ).button( { matchWidth: true } );
});
