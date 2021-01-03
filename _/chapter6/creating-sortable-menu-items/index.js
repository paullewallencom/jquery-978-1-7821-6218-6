
(function( $, undefined ) {

$.widget( "ab.menu", $.ui.menu, {

    options: {
        sortable: false
    },

    _create: function() {

        this._super();

        if ( !this.options.sortable ) {
            return;
        }

        var $element = this.element,
            storedOrder = $.cookie( $element.attr( "id" ) ),
            $items = $element.find( ".ui-menu-item" );

        if ( storedOrder ) {

            storedOrder = storedOrder.split( "," );

            $items = $items.sort( function( a, b ) {

                var a_id = $( a ).attr( "id" ),
                    b_id = $( b ).attr( "id" ),
                    a_index = storedOrder.indexOf( a_id ),
                    b_index = storedOrder.indexOf( b_id );

                return a_index > b_index;

            });

            $items.appendTo( $element );

        }

        $element.sortable({

            update: function( e, ui ) {

                var id = $( this ).attr( "id" ),
                    sortedOrder = $( this ).sortable( "toArray" )
                                           .toString();

                $.cookie( id, sortedOrder );

            }

        });
        
    },

});

})( jQuery );

$(function() {
    $( "#menu" ).menu( { sortable: true } );
});
