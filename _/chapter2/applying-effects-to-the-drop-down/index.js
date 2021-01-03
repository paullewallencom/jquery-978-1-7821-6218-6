( function( $, undefined ) {

$.widget( "ab.autocomplete", $.ui.autocomplete, {

	_suggest: function( items ) {
		
        this._resetMenu();
        this._renderMenu( this.menu.element, items );
        this.menu.refresh();

        this._resizeMenu();
        this._positionMenu();

	},

    _resetMenu: function() {

        this.menu.element
                 .empty()
			     .zIndex( this.element.zIndex() + 1 );

    },

    _positionMenu: function() {

		var pos = $.extend( { of: this.element }, this.options.position );
        this.menu.element.position( pos );

    },

    _resizeMenu: function() {

        var menu = this.menu,
            exclude = 0;
            target = Math.max(
			    menu.element.width( "" ).outerWidth() + 1,
			    this.element.outerWidth()
            ),
            excludeCSS = [
                'borderLeftWidth',
                'borderRightWidth',
                'paddingLeft',
                'paddingRight'
            ];

        if( menu.element.is( ":hidden" ) ) {
            menu.element.css( { display: "block", opacity: 0 } );
        }
        
        $.each( excludeCSS , function( index, item ) {
            exclude += parseFloat( menu.element.css( item ) );
        });

        if ( menu.element.css( "opacity" ) == 0 ) {
            menu.element.animate({
                width: target - exclude,
                opacity: 1
            }, 300);
        }
        else{
            menu.element.width( target - exclude );
        }

    },

	_close: function( event ) {

        var menu = this.menu;

		if ( menu.element.is( ":visible" ) ) {

			menu.element.fadeOut();
			menu.blur();
			this.isNewMenu = true;
			this._trigger( "close", event );

		}

	}

});

})( jQuery );

$(function() {
    var source = [
        "First Item",
        "Second Item",
        "Third Item",
        "Fourth Item"
    ];
	$( "#autocomplete" ).autocomplete({
        source: source,
    });
});
