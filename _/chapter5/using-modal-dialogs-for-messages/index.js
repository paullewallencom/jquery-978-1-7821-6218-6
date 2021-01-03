
(function( $, undefined ) {

$.widget( "ab.notify", $.ui.dialog, {

    options: { 
        modal: true,
        resizable: false,
        draggable: false,
        minHeight: 100,
        autoOpen: false,
        error: false
    },

    open: function() {

        var error = this.options.error,
            newClass = error ? "ui-state-error" : "ui-state-highlight",
            oldClass = error ? "ui-state-highlight" : "ui-state-error";

        this.element.html( this.options.text );

        this.uiDialog.addClass( newClass )
                     .removeClass( oldClass )
                     .find( ".ui-dialog-titlebar" )
                     .removeClass( "ui-widget-header ui-corner-all" );

        this._super();

    },

});

})( jQuery );

$(function() {

    $( "#notify" ).notify();

    $( "#show-info, #show-error" ).button();
    
    $( "#show-info" ).click( function( e ) {

        $( "#notify" ).notify( "option", {
            error: false,
            text: "Successfully completed task"
        });

        $( "#notify" ).notify( "open" );

    });

    $( "#show-error" ).click(function( e ) {

        $( "#notify" ).notify( "option", {
            error: true,
            text: "Failed to complete task"
        });

        $( "#notify" ).notify( "open" );

    })
    
});
