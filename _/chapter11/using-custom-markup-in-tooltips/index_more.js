
(function( $, undefined ) {

$.widget( "ab.tooltip", $.ui.tooltip, {

    options: {
        header: null,
        body: null,
        footer: null
    },

    _create: function() {

        this._super();

        var header = this.options.header,
            body = this.options.body,
            footer = this.options.footer;

        if ( !header && !body && !footer ) {
            return;
        }

        this.options.content = $.proxy( this, "_content" );

    },

    _content: function() {
        var header = this.options.header,
            body = this.options.body,
            footer = this.options.footer,
            $content = $( "<div/>" );

        if ( header ) {
            $( "<div/>" ).text( header )
                         .addClass( "ui-tooltip-header" )
                         .appendTo( $content );
        }

        if ( body ) {
            $( "<div/>" ).text( body )
                         .addClass( "ui-tooltip-body" )
                         .appendTo( $content );
        }
        
        if ( footer ) {
            $( "<div/>" ).text( footer )
                         .addClass( "ui-tooltip-footer" )
                         .appendTo( $content );
        }

        return $content;
    }

});

})( jQuery );

$(function() {

    var apikey = "2vnk..." // Your key goes here,
        apibase = "http://api.rottentomatoes.com/api/public/v1.0";

    $.ajax({
        url: apibase + "/lists/movies/in_theaters.json",
        dataType: "jsonp",
        data: {
            apikey: apikey,
            page_limit: "5",
        },
        success: function( data ) {

            $.each( data.movies, function( i, v ) {

                var $logo = $( "<img/>" );

                $logo.attr( "src", v.posters.thumbnail )
                     .appendTo( ".titles" );

                $logo.tooltip({
                    header: v.title,
                    body: v.synopsis.substring( 0, 150 ) + "...",
                    footer: v.year + " (" + v.mpaa_rating + ")",
                    items: "img"
                });

            });

        }
    });

});
