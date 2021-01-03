
(function( $, undefined ) {

$.widget( "ui.datepicker", $.ui.datepicker, {
    options: $.extend(
        $.ui.datepicker.prototype.options,
        { dateFormat: "DD, MM d, yy" }
    ),
});

})( jQuery );

$(function() {
    $( "#start" ).datepicker();
    $( "#stop" ).datepicker();
});
