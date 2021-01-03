
(function( $, undefined ) {

$.widget( "ab.slider", $.ui.slider, {

    options: {
        ticks: false
    },

    _create: function() {
        
        this._super();

        if ( !this.options.ticks || this.options.step < 5 ) {
            return;
        }

        var cnt = this.options.min + this.options.step,
            background = this.element.css( "border-color" ),
            left;

        while ( cnt < this.options.max ) {
            
            left = ( cnt / this.options.max * 100 ).toFixed( 2 ) + "%";

            $( "<div/>" ).addClass( "ui-slider-tick" )
                         .appendTo( this.element )
                         .css( { left: left, background: background } );

            cnt += this.options.step;

        }

    }

});

})( jQuery );

$(function() {

    $( "#slider" ).slider({
        min: 0,
        max: 200,
        step: 20,
        ticks: true
    });

});
