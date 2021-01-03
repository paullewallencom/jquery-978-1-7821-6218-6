
(function( $, undefined ) {

$.widget( "ab.menu", $.ui.menu, {

    options: {
        submenuClass: false
    },

    refresh: function() {

        if ( this.options.submenuClass ) {

            this.element.find( this.options.menus + ":not(.ui-menu)" )
                        .addClass( this.options.submenuClass );

        }

        this._super();

    }

});

})( jQuery );

$(function() {
    $( "#menu" ).menu( { submenuClass: "ui-state-highlight" } );
});
