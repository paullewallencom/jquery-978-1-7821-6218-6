( function( $, undefined ) {

$.widget( "ab.autocomplete", $.ui.autocomplete, {

    inputClasses: "ui-widget ui-widget-content ui-corner-all",

    _create: function() {
        this._super( "_create" );
        this._focusable( this.element );
        this.element.addClass( this.inputClasses );
    },

    _destroy: function() {
        this._super( "_destroy" );
        this.element.removeClass( this.inputClasses );
    }

});

})( jQuery );

$( function() {
    var source = [
        'First Item',
        'Second Item',
        'Third Item',
        'Fourth Item'
    ];
	$( "#autocomplete" ).autocomplete( { source: source } );
});
