
(function( $, undefined ) {

$.widget( "ab.spinner", $.ui.spinner, {

    options: {
        inputOutline: true
    },

    _create: function() {
        
        this._super();

        if ( this.options.inputOutline ) {
            return;
        }

        this.element.addClass( "ui-spinner-input-no-outline" );
        this._focusable( this.uiSpinner );

    }

});

})( jQuery );

$(function() {

    $( "#spinner" ).spinner({
        inputOutline: false
    });

});
