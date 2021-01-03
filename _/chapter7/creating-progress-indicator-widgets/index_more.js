
(function( $, undefined ) {

$.widget( "ab.progressindicator", $.ui.progressbar, {

	_create: function() {
        
        this._super();
        this.value( 40 );
        this.element.addClass( "ui-progressindicator" )
                    .removeClass( "ui-corner-all" );
        this.valueDiv.removeClass( "ui-corner-right ui-corner-left" );

    },

    _destroy: function() {

        this.element.removeClass( "ui-progressindicator" );
        this._super();

    }

});

})( jQuery );

$(function() {

    $( "#indicator" ).progressindicator();

});
