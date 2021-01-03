
(function( $, undefined ) {

$.widget( "ab.tracker", $.ui.tooltip, {

    options: {
        track: true,
        items: ".ui-tracker",
        relative: false
    },

    _create: function() {

        this.element.addClass( "ui-tracker" );

        this._super();

        this.options.content = $.proxy( this, "_content" );

    },

    _content: function() {

        var $content = $( "<div/>" ),
            relative = this.options.relative,
            xlabel = relative ? "Element X: " : "Page X: ",
            ylabel = relative ? "Element Y: " : "Page Y: ";

        $( "<div/>" ).append( $( "<strong/>" ).text( xlabel ) )
                     .append( $( "<span/>" ).attr( "id", "ui-tracker-x" ) )
                     .appendTo( $content );

        $( "<div/>" ).append( $( "<strong/>" ).text( ylabel ) )
                     .append( $( "<span/>" ).attr( "id", "ui-tracker-y" ) )
                     .appendTo( $content );

        return $content;

    },

    _mousemove: function( e ) {

        var $target = $( e.target ).closest( this.options.items ),
            offset,
            offsetLeft = 0
            offsetTop = 0;

        if ( this.options.relative ) {
            offset = $target.offset();
            offsetLeft = offset.left;
            offsetTop = offset.top;
        }

        $( "#ui-tracker-x" ).text( e.pageX - offsetLeft );
        $( "#ui-tracker-y" ).text( e.pageY - offsetTop );

    },

    open: function( e ) {

        this._super( e );

        var $target = $( e.target ).closest( this.options.items );

        this._on( $target, {
            mousemove: $.proxy( this, "_mousemove" )
        });

    }

});

})( jQuery );

$(function() {

    $( ".mouse-tracker-page" ).tracker();
    $( ".mouse-tracker-relative" ).tracker({
        relative: true
    });

});
