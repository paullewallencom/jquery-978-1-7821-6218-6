
(function( $, undefined ) {

$.widget( "ab.progressbar", $.ui.progressbar, {

    options: {
        threshold: 0
    },

	_percentage: function() {

        var percentage = this._super(),
            threshold = this.options.threshold;

        if ( threshold <= 0 ) {
            return percentage;
        }

        if ( percentage > threshold ) {
            this.valueDiv.addClass( "ui-state-error" );
        }
        else {
            this.valueDiv.removeClass( "ui-state-error" );
        }

        return percentage;

	},

});

})( jQuery );

$(function() {

    $( "#cpu-utilization" ).progressbar( { threshold: 80 } );
    $( "#memory-utilization" ).progressbar( { threshold: 85 } );

    setInterval(function() {

        var cpu = Math.floor( ( Math.random() * 100 ) + 1 ),
            memory = Math.floor((Math.random()*100)+1)

        $( "#cpu-utilization" ).progressbar( "value", cpu );
        $( "#memory-utilization" ).progressbar( "value", memory );
    
    }, 1300);

});
