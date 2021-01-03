
$(function() {

    $( "#slider" ).slider({
        min: 0,
        max: 600,
        values: [280, 475],
        range: true,
        create: function( e, ui ) {
            console.log($(this).data());
            var values = $( this ).data( "uiSlider" ).values();
            $( "#range-value" ).text( values[1] - values[0] );
        },
        change: function( e, ui ) {
            $( "#range-value" ).text( ui.values[1] - ui.values[0] );
        }
    });

});
