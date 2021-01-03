( function( $, undefined ) {

$.widget( "ab.autocomplete", $.ui.autocomplete, {

    inputClasses: "ui-widget ui-widget-content ui-corner-all",

    _create: function() {

        if ( this.element.is( "select" ) ) {

            var self = this;
            this.original = this.element.hide();
            this.element = $( "<input/>" ).insertAfter( this.original );

            this.options.source = function( request, response ) {

                var filter = $.ui.autocomplete.filter,
                    options = self.original.find( "option" ),
                    result = options.map( function() {
                        return $( this ).val();
                    });

                response( filter( result, request.term ) );

            };

        }

        this._super( "_create" );

    },

    _destroy: function() {

        this._super( "_destroy" );
        this.element.remove();
        this.original.show();

    }

});

})( jQuery );

$( function() {
	$( "#autocomplete" ).autocomplete();
});
