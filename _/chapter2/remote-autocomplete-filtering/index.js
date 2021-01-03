$( function() {
	$( "#autocomplete" ).autocomplete({
        minLength: 3,
        source: function( request, response ) {
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
                    response( items );
                }
            });
        }
    });
});
