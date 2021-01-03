
(function( $, undefined ) {

$.widget( "ab.dialog", $.ui.dialog, {

    options: {
        iconButtons: false
    },

    _create: function() {

        this._super();

        var $titlebar = this.uiDialog.find( ".ui-dialog-titlebar" );

        $.each( this.options.iconButtons, function( i, v ) {

            var button = $( "<button/>" ).text( v.text ),
                right = $titlebar.find( "[role='button']:last" )
                                 .css( "right" );

            button.button( { icons: { primary: v.icon }, text: false } )
                  .addClass( "ui-dialog-titlebar-close" )
                  .css( "right", (parseInt(right) + 22) + "px" )
			      .click( v.click )
			      .appendTo( $titlebar );

        });

    }

});

})( jQuery );

$(function() {

    $( "#dialog" ).dialog({
        iconButtons: [
            {
                text: "Search",
                icon: "ui-icon-search",
                click: function( e ) {
                    $( "#dialog" ).html( "<p>Searching...</p>" );
                }
            },
            {
                text: "Add",
                icon: "ui-icon-plusthick",
                click: function( e ) {
                    $( "#dialog" ).html( "<p>Adding...</p>" );
                }
            }
        ]
    });

});
