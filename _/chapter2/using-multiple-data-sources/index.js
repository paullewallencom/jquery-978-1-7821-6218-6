( function( $, undefined ) {

$.widget( "ab.autocomplete", $.ui.autocomplete, {

    options: { 
        sources: []    
    },

    _create: function() {

        var sources = this.options.sources;

        if ( sources.length ) {

            this.options.source = function ( request, response ) {

                var merged = [],
                    filter = $.ui.autocomplete.filter;

                $.each( sources, function ( index, value ) {
                    $.merge( merged, value );
                });

                response( filter( merged, request.term ) );

            };

        }

        this._super( "_create" );

    },

    _destroy: function() {
        this._super( "_destroy" );
    }

});

})( jQuery );

$( function() {
    var s1 = [
            "DVD 1",
            "DVD 2",
            "DVD 3"
        ],
        s2 = [
            "Blu-ray 1",
            "Blu-ray 2",
            "Blu-ray 3"
        ];
        
	$( "#autocomplete" ).autocomplete({
        sources: [s1, s2]
    });
});
