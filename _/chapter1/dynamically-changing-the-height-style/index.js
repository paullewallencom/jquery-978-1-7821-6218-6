(function( $, undefined ) {

$.widget( "ab.accordion", $.ui.accordion, {

    refresh: function() {

        this._super( "refresh" );

        if ( this.options.heightStyle !== "content" ) {
            return;
        }

        this.headers.next().each( function() {

            if ( $( this ).css( "height" ) ) {
                $( this ).css( "height", "" );
            }

        });

    }

});

})(jQuery);

$(function() {

    $( "#accordion" ).accordion();

    for ( var i=0; i<20; i++ ){
        $( "ul" ).append( "<li>nth item</li>" );
    }

    $( "#accordion" ).accordion( "option", "heightStyle", "content" )
                     .accordion( "refresh" );

});
