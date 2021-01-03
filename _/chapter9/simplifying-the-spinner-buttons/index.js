
(function( $, undefined ) {

$.widget( "ab.spinner", $.ui.spinner, {

    options: {
        basic: false
    },

    _create: function() {
        
        this._super();

        if ( this.options.basic ) {
            this.uiSpinner.addClass( "ui-spinner-basic" );
        }

    }

});

})( jQuery );

$(function() {

    $( "#spin" ).spinner({
        basic: true
    });

});
