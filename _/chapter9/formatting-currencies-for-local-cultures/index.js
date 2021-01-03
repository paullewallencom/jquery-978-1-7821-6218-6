
$(function() {

    var defaultCulture = Globalize.cultures.default;

    $.each( Globalize.cultures, function( i, v ) {
        
        if ( i === "default" ) {
            return;
        }

        var culture = $( "<div/>" ).appendTo( ".culture-container" );

        $( "<input/>" ).attr( "type", "radio" )
                       .attr( "name", "cultures" )
                       .attr( "id", v.name )
                       .attr( "checked", defaultCulture.name === v.name )
                       .appendTo( culture );

        $( "<label/>" ).attr( "for", v.name )
                       .text( v.englishName )
                       .appendTo( culture );

    });

    $( "#spinner" ).spinner({
        numberFormat: "C",
        step: 5,
        min: 0,
        max: 100,
        culture: $( "input:radio[name='cultures']:checked" ).attr( "id" )
    });

    $( "input:radio[name='cultures']" ).on( "change", function( e ) {
        $( "#spinner" ).spinner( "option", "culture", $( this ).attr( "id" ) );
    });

});
