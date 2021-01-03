
(function( $, undefined ) {

$.widget( "ui.slider", $.ui.slider, {

    options: {
        parent: null,
        percentage: null
    },

    _create: function() {

        this._super();

        var parent = this.options.parent,
            percentage = this.options.percentage,
            $parent;

        if ( !( parent && percentage ) ) {
            return;
        }

        $parent = $( parent );

        this._reset( $parent.slider( "value" ) );

        this._on( $parent , { 
            slidechange: function( e, ui ) {
                this._reset( ui.value );
            }
        });

    },

    _reset: function( parentValue ) {

        var percentage = ( 0.01 * this.options.percentage ),
            newMax = percentage * parentValue,
            oldMax = this.option( "max" ),
            value = this.option( "value" );

        value = ( value / oldMax ) * newMax;

        this.option( "max", newMax );
        this.option( "value", value );

    }

});

})( jQuery );

$(function() {

    function updateLabel( e, ui ) {

        var maxValue = $( this ).slider( "option", "max" )
                                .toFixed( 0 ),
            value = $( this ).slider( "value" )
                             .toFixed( 0 ) + " MHz" +
                                             " / " + 
                                             maxValue + 
                                             "MHz";

        $( this ).siblings( ".slider-value" ).text( value );

    }

    $( "#master" ).slider({
        range: "min",
        value: 379,
        min: 1,
        max: 2400,
        create: updateLabel,
        change: updateLabel
    });

    $( "#cpu1" ).slider({
        parent: "#master",
        percentage: 25,
        range: "min",
        min: 0,
        create: updateLabel,
        change: updateLabel
    });

    $( "#cpu2" ).slider({
        parent: "#master",
        percentage: 35,
        range: "min",
        min: 0,
        create: updateLabel,
        change: updateLabel
    });

    $( "#cpu3" ).slider({
        parent: "#master",
        percentage: 15,
        range: "min",
        min: 0,
        create: updateLabel,
        change: updateLabel
    });

    $( "#cpu4" ).slider({
        parent: "#master",
        percentage: 25,
        range: "min",
        min: 0,
        create: updateLabel,
        change: updateLabel
    });

});
