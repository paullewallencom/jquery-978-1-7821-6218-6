$(function() {

    $( "#upload-progress" ).progressbar();

    $( "form" ).submit( function( e ) {

        e.preventDefault();

        $.ajax({
            url: $( this ).attr("action"),
            type: "POST",
            data: new FormData( this ), 
            cache: false,
            contentType: false,
            processData: false,
            xhr: function() {

                xhr = $.ajaxSettings.xhr();

                if ( xhr.upload ) {
                    xhr.upload.onprogress = onprogress;
                }

                return xhr;

            }

        });

        return false;

    });

    var onprogress = function( e ) {

        var uploadPercent = ( e.loaded / e.total * 100 ).toFixed();

        $( "#upload-container" ).show();
        $( "#upload-value" ).text( "Uploading..." + uploadPercent + "%" );
        $( "#upload-progress" ).progressbar( "option", "max", e.total )
                               .progressbar( "value", e.loaded );

    }; 

});

