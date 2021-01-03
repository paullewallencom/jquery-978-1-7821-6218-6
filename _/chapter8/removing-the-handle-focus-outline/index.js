
(function( $, undefined ) {

$.widget( "ab.slider", $.ui.slider, {

    options: { 
        handleOutline: true
    },

    _create: function() {
        
        this._super();

        if ( this.options.handleOutline ) {
            return;
        }

        this.handles.addClass( "ui-slider-handle-no-outline" );

    }

});

})( jQuery );

$(function() {

    $( "#slider" ).slider({
        handleOutline: false,
    });

});
