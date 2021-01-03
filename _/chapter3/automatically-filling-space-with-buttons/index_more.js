
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

    _destroy: function() {
        this._super();
        this.element.css( "text-align", "" );
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
            this.element.css( "text-align", "left" );
        }

    }

});

})( jQuery );

$(function() {
    $( "button" ).button( { matchWidth: true } );
});
