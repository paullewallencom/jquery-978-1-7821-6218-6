
$(function() {

    $( "#tabs" ).tabs({
        create: function( e, ui ) {
            $( this ).addClass( "ui-tabs-basic" )
                     .find( "> ul.ui-tabs-nav" )
                     .removeClass( "ui-corner-all" );
        }
    });

});
