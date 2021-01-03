
$(function() {

    function tabLoad( e, ui ) {
        if ( ui.panel.html() !== "" ) {
            ui.jqXHR.abort();
        }
        else {
            ui.jqXHR.error(function( data ) {
                $( "<p/>" ).addClass( "ui-corner-all ui-state-error" )
                           .css( "padding", "4px" )
                           .text( data.statusText )
                           .appendTo( ui.panel );
            });
        }
    }

    $( "#tabs" ).tabs({
        beforeLoad: tabLoad
    });

});
