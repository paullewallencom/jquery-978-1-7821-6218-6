(function( $, undefined ) {

$.widget( "ab.autocomplete", $.ui.autocomplete, {

    _renderMenu: function( ul, items ) {

        var that = this,
            currentCategory = "";

        items.sort( function( a, b ) {
            return a.cat > b.cat 
        });

        $.each( items, function( index, item ) {

            if ( item.cat != currentCategory ) {
                that._renderCategory( ul, item );
                currentCategory = item.cat;
            }

            that._renderItemData( ul, item );

        });

    },

    _renderCategory: function( ul, item ) {
        return $( "<li>" ).addClass( "ui-autocomplete-category " )
                          .html( item.cat )                          
                          .appendTo( ul );
    },

    _renderItem: function( ul, item ) {
        return $( "<li>" ).addClass( "ui-autocomplete-item" )
                          .append( $( "<a>" )
                          .append( $( "<span>" ).html( item.label ) )
                          .append( $( "<span>" ).html( item.desc ) ) )
                          .appendTo( ul );
    }

});

$.ui.autocomplete.filter = function( array, term ) {

    var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );

	return $.grep( array, function( value ) {
	    return matcher.test( value.cat ) || 
               matcher.test( value.desc ) ||
               matcher.test( value.label )
    });

};

})( jQuery );

$(function() {

    var items = [
        {
            value: "First Item",
            label: "First Item",
            desc: "A description of the first item goes here",
            cat: "Completed"
        },
        {
            value: "Second Item",
            label: "Second Item",
            desc: "A description of the second item goes here",
            cat: "In Progress"
        },
        {
            value: "Third Item",
            label: "Third Item",
            desc: "A description of the third item goes here",
            cat: "Completed"
        }
    ];
	
    $( "#autocomplete" ).autocomplete( {source: items} );

});
