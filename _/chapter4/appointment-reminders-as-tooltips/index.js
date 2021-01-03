
(function( $, undefined ) {

$.extend( $.datepicker, {

    _updateDatepicker: function( inst ) {

        var settings = inst.settings,
            days = "td[data-handler='selectDay']",
            $target = inst.dpDiv,
            _super = $.datepicker.constructor.prototype;

        _super._updateDatepicker.call( this, inst )

        if ( !settings.hasOwnProperty( "reminders" ) ) {
            return;
        }

        $target.find( days ).each( function( i, v ) {

            var td = $( v ),
                currentDay = new Date(
                    td.data( "year" ),
                    td.data( "month" ),
                    td.find( "a" ).html()
                );

            $.each( settings.reminders, function( i, v ) {

                var reminderTime = v.date.getTime(),
                    reminderText = v.text,
                    currentTime = currentDay.getTime();

                if ( reminderTime == currentTime ) {
                    td.attr( "title", reminderText ).tooltip();
                }

            });

        });
        
    }

});

})( jQuery );

$(function() {
    $( ".calendar" ).datepicker({
        reminders: [
            {
                date: new Date(2013, 0, 1),
                text: "Happy new year!"
            },
            {
                date: new Date(2013, 0, 14),
                text: "Call in sick, case of the Mondays"
            },
            {
                date: new Date(2013, 1, 14),
                text: "Happy Valentine's Day!"
            }
        ]
    });
});
