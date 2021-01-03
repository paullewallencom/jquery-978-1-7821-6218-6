
(function( $, undefined ) {

$.widget( "ab.progressindicator", $.ui.progressbar, {

	_create: function() {
        
        this._super();
        this.value( 40 );
        this.element.removeClass( "ui-corner-all" );
        this.valueDiv.removeClass( "ui-corner-right ui-corner-left" );

        var self = this,
            margin = ( this.element.innerWidth() - this.valueDiv.width() ) + "px";

	    var _right = function() {

            self.valueDiv.animate(
                { "margin-left": margin },
                { duration: 1000, complete: _left }
            );

        };

        var _left = function() {

            self.valueDiv.animate(
                { "margin-left": "0px" },
                { duration: 1000, complete: _right }
            );

        };

        _right();

    },

    _destroy: function() {

        this.valueDiv.stop( true, true );
        this._super();

    }

});

})( jQuery );

$(function() {

    $( "#indicator" ).progressindicator();

});
