
(function( $, undefined ) {

$.widget( "ab.tabs", $.ui.tabs, {

    _findActive: function( index ) {
        return this._super( this._getIndex( index ) );
    },

    _initialActive: function() {
        this.options.active = this._getIndex( this.options.active );
        return this._super();
    }
   
});

})( jQuery );

$(function() {

    $( "#tabs" ).tabs({
        active: "#tab2"
    });

    $( ".tab-link" ).on( "click", function( e ) {
        e.preventDefault();
        $( "#tabs" ).tabs( "option", "active", $( this ).attr( "href" ) );
    });

});
