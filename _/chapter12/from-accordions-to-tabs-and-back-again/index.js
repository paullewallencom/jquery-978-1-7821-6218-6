
( function( $, undefined ) {

$.widget( "ab.accordion", $.ui.accordion, {

    tabs: function() {

        this.destroy();

        var self = this,
            oldHeaders = this.headers,
            newHeaders = $( "<ul/>" );

        oldHeaders.each( function( i, v ) {

            var id = self.namespace + "-tabs-" + self.uuid + "-" + i,
                header = $( "<li/>" ).appendTo( newHeaders );

            $( "<a/>" ).text( $( v ).text() )
                       .attr( "href", "#" + id )
                       .appendTo( header );

            oldHeaders.next().eq( i ).attr( "id", id );

        });

        newHeaders.prependTo(this.element);

        this.headers.remove();
        return this.element.tabs();

    }

});

$.widget( "ab.tabs", $.ui.tabs, {

    accordion: function() {

        this.destroy();

        var self = this;

        this.tabs.each( function( i, v ) {

            var $link = $( v ).find( "a" ),
                id = $link.attr( "href" ),
                text = $link.text();
                
            $( "<h3/>" ).text( text )
                        .insertBefore( id );

        });

        this.tablist.remove();
        return this.element.accordion();
        
    },

});

})( jQuery );

$(function() {

    $( "button.toggle" ).button().on( "click", function( e ) {

        var $widget = $( this ).next();

        if ( $widget.is( ":ab-accordion" ) ) {
            $widget.accordion( "tabs" );
        }
        else if ( $widget.is( ":ab-tabs" ) ) {
            $widget.tabs( "accordion" );
        }

    });

    $( "#accordion" ).accordion();
    $( "#tabs" ).tabs();

});
