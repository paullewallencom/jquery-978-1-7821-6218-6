( function( $, undefined ) {

$.widget( "ab.autocomplete", $.ui.autocomplete, {

    _cache: {},

	_search: function( value ) {

        var response = this._response(),
            cache = this._cache;

		this.pending++;
		this.element.addClass( "ui-autocomplete-loading" );
		this.cancelSearch = false;

        if ( value in cache ) {
            response( cache[value] );
        }
        else {
            this.source( { term: value }, response );
        }

	}

});

})( jQuery );

$( function() {
	$( "#autocomplete" ).autocomplete({
        minLength: 3,
        source: function( request, response ) {
            var self = this;
            $.ajax({
                url: "https://api.github.com/legacy/repos/search/:" + request.term,
                dataType: "jsonp",
                success: function( resp ) {
                    var repositories = resp.data.repositories.splice( 0, 10 );
                    var items = $.map( repositories, function ( item ) {
                        return { 
                            label: item.name + " (" + 
                                   item.language + ")",
                            value: item.name
                        };
                    });
                    self._cache[request.term] = items;
                    response( items );
                }
            });
        }
    });
});
