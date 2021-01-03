
$(function() {

    function beforeLoad( e, ui ) {

        ui.jqXHR.error(function( data ) {
            ui.panel.empty();
            $( "<p/>" ).addClass( "ui-corner-all ui-state-error" )
                       .css( "padding", "4px" )
                       .text( data.statusText )
                       .appendTo( ui.panel );
        });

    }

    function afterLoad( e, ui ) {
        $( "h1", ui.panel ).remove();
    }

    $( "#tabs" ).tabs({
        beforeLoad: beforeLoad,
        load: afterLoad
    });

});
