
(function( $, undefined ) {

$.widget( "ab.dialog", $.ui.dialog, {

    options: { 
        promises: []
    },

    open: function( isPromise ) {

        var $element = this.element,
            promises = this.options.promises;

        if ( promises.length > 0 && !isPromise ) {
            $.when.apply( $, promises ).then( function() {
                $element.dialog( "open", true );
            });
        }
        else {
            this._super();
        }

    },

});

})( jQuery );

$(function() {

    var repos = $.ajax({
        url: "https://api.github.com/repositories",
        dataType: "jsonp",
        success: function( resp ) {
            $.each( resp.data, function( i, v ) {
                $( "<option/>" ).html( v.name )
                                .appendTo( "#repos" );
            });
        },
    });

    var users = $.ajax({
        url: "https://api.github.com/users",
        dataType: "jsonp",
        success: function( resp ) {
            $.each( resp.data, function( i, v ) {
                $( "<option/>" ).html( v.login )
                                .appendTo( "#users" );
            });
        }
    });

    $( "#dialog" ).dialog({
        width: 400,
        promises: [
            repos.promise(),
            users.promise()
        ]
    });

});
