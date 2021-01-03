
(function( $, undefined ) {

$.widget( "ab.dialog", $.ui.dialog, {

    _create: function() {

        this._super();

        var dialog = this.uiDialog;

        dialog.find( ".ui-dialog-titlebar" ).hide();
        dialog.find( ".ui-dialog-buttonpane" ).hide();

    },

    open: function() {

        this._super();

        var dialog = this.uiDialog;

        dialog.find( ".ui-dialog-titlebar" ).toggle( "fold", 500 );
        dialog.find( ".ui-dialog-buttonpane" ).toggle( "fold", 500 );

    },

    close: function( event, isCallback ) {

        var self = this,
            dialog = this.uiDialog;

        if ( isCallback ) {
            this._super( event );
            return;
        }

        dialog.find( ".ui-dialog-titlebar" ).toggle( "fold", 500 );
        dialog.find( ".ui-dialog-buttonpane" ).toggle( "fold", 500, function(){
            self.element.dialog( "close", event, true );
        });
   
    }

});

})( jQuery );

$(function() {

    $( "div" ).dialog({
        show: "fade", 
        hide: "scale",
        buttons: {
            Cancel: function() {
                $( this ).dialog( "close" );
            }
        }
    });

});
