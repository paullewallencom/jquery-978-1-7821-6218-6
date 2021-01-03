
(function( $, undefined ) {

$.widget( "ab.menu", $.ui.menu, {

    options: {
        animate: false
    },

    _create: function() {

        this._super();

        if ( !this.options.animate ) {
            return;
        }

        this.element.find( ".ui-menu" )
                    .addBack()
                    .addClass( "ui-menu-animated" );

    },

	_close: function( startMenu ) {

        this._super( startMenu );

        if ( !this.options.animate ) {
            return;
        }

		if ( !startMenu ) {
			startMenu = this.active ? this.active.parent() : this.element;
		}

        startMenu.find( ".ui-menu" ).css( "left", "" );

	}


});

})( jQuery );

$(function() {
    $( "#menu" ).menu( { animate: true } );
});
