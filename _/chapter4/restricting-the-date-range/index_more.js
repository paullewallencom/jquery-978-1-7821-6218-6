$(function() {

    function change ( e ) {
    
        var minDate = $( this ).datepicker( "getDate" );

        $( "#stop" ).datepicker( "enable" );
        $( "#stop" ).datepicker( "option", "minDate", minDate );

    }

    $( "#start" ).datepicker()
                 .change( change );

    $( "#stop" ).datepicker( { disabled: true } );

});
