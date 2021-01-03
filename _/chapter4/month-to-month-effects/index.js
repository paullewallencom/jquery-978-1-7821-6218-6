
(function( $, undefined ) {

$.extend( $.datepicker, {

    _updateDatepicker: function( inst ) {

        var self = this,
            _super = $.datepicker.constructor.prototype;

        inst.dpDiv.fadeOut( 500, function() {
            inst.dpDiv.fadeIn( 300 );
            _super._updateDatepicker.call( self, inst );
        });

    }

});

})( jQuery );

$(function() {
    $( ".calendar" ).datepicker();
});
