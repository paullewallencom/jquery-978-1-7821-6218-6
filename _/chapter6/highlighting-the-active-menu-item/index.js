
(function( $, undefined ) {

$.widget( "ab.menu", $.ui.menu, {

    options: {
        highlight: false
    },

    _create: function() {

        this._super();

        if ( !this.options.highlight ) {
            return;
        }

        this._on({
            "click .ui-menu-item:has(a)": "_click"
        });

    },

    _click: function( e ) {

        this.element.find( ".ui-menu-item a" )
                    .removeClass( "ui-state-highlight" );

        $( e.target ).closest( ".ui-menu-item a" )
                     .addClass( "ui-state-highlight ui-corner-all" );

    }

});

})( jQuery );

$(function() {
    $( "#menu" ).menu( { highlight: true } );
});
