( function( $, undefined ) {

$.widget( "ab.accordion", $.ui.accordion, {

    options: {
        sortable: false
    },

    _create: function () {

        this._super( "_create" );

        if ( !this.options.sortable ) {
            return;
        }

        this.headers.each( function() {
            $( this ).next()
                     .addBack()
                     .wrapAll( "<div/>" );
        });

        this.element.sortable({
            axis: "y",
            handle: "h3",
            stop: function( event, ui ) {
                ui.item.children( "h3" )
                       .triggerHandler( "focusout" );
            }
        });        

    },

    _destroy: function () {

        if ( !this.options.sortable ) {
            this._super( "_destroy" );
            return;
        }

        this.element.sortable( "destroy" );

        this.headers.each( function () {
            $( this ).unwrap( "<div/>" );
        });

        this._super( "_destroy" );

    }

});

})( jQuery );

$( function() {

    $( "#accordion" ).accordion( { sortable: true } );

});
