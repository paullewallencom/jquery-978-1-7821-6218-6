(function( $, undefined ) {

$.widget( "ab.accordion", $.ui.accordion, {

    options: {
        resizable: true
    },

    _create: function () {
        
        this._super( "_create" );

        if ( !this.options.resizable ) {
            return;
        }

        this.headers.next()
                    .resizable( { handles: "s" } )
                    .css( "overflow", "hidden" );
    },

    _destroy: function () {

        this._super( "_destroy" );

        if ( !this.options.resizable ) {
            return;
        }

        this.headers.next()
                    .resizable( "destroy" )
                    .css( "overflow", "" );

    },

});

})( jQuery );

$(function() {

	$( "#accordion" ).accordion( { resizable: false } );

});
