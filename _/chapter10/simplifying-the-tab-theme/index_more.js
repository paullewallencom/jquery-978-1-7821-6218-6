
(function( $, undefined ) {

$.widget( "ab.tabs", $.ui.tabs, {

    options: {
        basic: false
    },

    _create: function() {

        this._super();

        if ( !this.options.basic ) {
            return;
        }

        $( this.element ).addClass( "ui-tabs-basic" )
                         .find( "> ul.ui-tabs-nav" )
                         .removeClass( "ui-corner-all" );

    }

});

})( jQuery );

$(function() {

    $( "#tabs" ).tabs({
        basic: true
    });

});
