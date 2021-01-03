
(function( $, undefined ) {

$.widget( "ab.dialog", $.ui.dialog, {

    options: {
        icon: false
    },

    _create: function() {

        this._super();
        
        if ( this.options.icon ) {

            var iconClass = "ui-dialog-icon ui-icon " + this.options.icon;
            
            this.uiDialog.find( ".ui-dialog-titlebar" )
                         .prepend( $( "<span/>" ).addClass( iconClass ));

        }

    },

});

})( jQuery );

$(function() {

    $( "#dialog" ).dialog({
        icon: "ui-icon-pencil",
        buttons: {
            Save: function() { $( this ).dialog( "close" ) }
        }
    });

});
