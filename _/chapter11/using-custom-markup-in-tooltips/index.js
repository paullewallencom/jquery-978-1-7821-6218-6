
$(function() {

    $( "button" ).tooltip({
        content: function() {
            
            var $content = $( "<div/>" );

            $( "<div/>" ).text( $( this ).text() )
                            .addClass( "ui-tooltip-title" )
                            .appendTo( $content );

            $( "<span/>" ).text( $( this ).attr( "title" ) )
                          .appendTo( $content );

            return $content;

        }
    });

});
