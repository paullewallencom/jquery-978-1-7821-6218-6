
$(function() {

    $( "#regular" ).datepicker();

    $( "#expanded" ).datepicker({
        changeYear: true,
        changeMonth: true,
        showButtonPanel: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        showWeek: true
    });

});
