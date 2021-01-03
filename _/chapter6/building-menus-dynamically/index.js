
$(function() {

    var $menu = $( "#menu" ).menu(),
        $submenu = $( "<li><ul></ul></li>" ).appendTo( $menu );

    $submenu.prepend( $( "<a/>" ).attr( "href", "#" )
                                 .text( "Fourth Item" ) );

    $submenu.find( "ul" ).append( $( "<li><a href='#'>Fifth Item</a>" ) )
                         .append( $( "<li><a href='#'>Sixth Item</a>" ) );

    $menu.menu( "refresh" );

});
