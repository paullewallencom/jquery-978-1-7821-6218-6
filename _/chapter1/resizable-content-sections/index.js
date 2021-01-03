( function( $, undefined ) {

$.widget( "ab.accordion", $.ui.accordion, {

    _create: function () {

        this._super( "_create" );

        this.headers.next()
                    .resizable( { handles: "s" } )
                    .css( "overflow", "hidden" );

    },

    _destroy: function () {
    
        this._super( "_destroy" );

        this.headers.next()
                    .resizable( "destroy" )
                    .css( "overflow", "" );

    }

});

})( jQuery );

$( function() {

	$( "#accordion" ).accordion();

});
