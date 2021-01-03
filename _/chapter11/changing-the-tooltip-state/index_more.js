
(function( $, undefined ) {

$.widget( "ab.tooltip", $.ui.tooltip, {

    options: {
        inheritState: false
    },

    _create: function() {

        var self = this,
            options = this.options,
            states = [
                "ui-state-highlight",
                "ui-state-error"
            ];


        if ( !options.inheritState || options.tooltipClass ) {
            return this._super();
        }

        $.each( states, function( i, v ) {

            if ( self.element.hasClass( v ) ) {
                self.options.tooltipClass = v;
            }
            
        });
       
        this._super();
        
    }

});

})( jQuery );

$(function() {

    $( "button" ).tooltip({
        inheritState: true
    });

});
