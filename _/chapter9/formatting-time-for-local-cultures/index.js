
( function( $, undefined ) {

$.widget( "ab.time", $.ui.spinner, {

    options: {
        step: 60 * 1000,
        numberFormat: "t"
    },

	_parse: function( value ) {

        var parsed = value;

		if ( typeof value === "string" && value !== "" ) {

            var format = this.options.numberFormat,
                culture = this.options.culture;

            parsed = +Globalize.parseDate( value, format );

            if ( parsed === 0 ) {
                parsed = +Globalize.parseDate( value, format, culture );
            }

		}

		return parsed === "" || isNaN( parsed ) ? null : parsed;

	},

    _format: function( value ) {
        return this._super( new Date( value ) );
    }

});

})( jQuery );

$(function() {

    $( "#time-ca" ).time({
        culture: "en-CA"
    });

    $( "#time-gb" ).time({
        culture: "en-GB"
    });

});
