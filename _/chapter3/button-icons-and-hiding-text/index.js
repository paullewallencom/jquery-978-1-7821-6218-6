
(function( $, undefined ) {

$.widget( "ab.button", $.ui.button, {

    options: {
        icon: true
    },

    _hiddenIcons: {},

    _setOption: function( key, value ) {

        if ( key != "icon" ) {
            this._superApply( arguments );
            return;
        }

        if ( !value && !$.isEmptyObject( this.options.icons ) ) {
            this._hiddenIcons = this.options.icons;
            this._super( "text", true );
            this._super( "icons", {} );
        }
        else if ( value && $.isEmptyObject( this.options.icons ) ) {
            this._super( "icons", this._hiddenIcons );
        }

    },

    _create: function() {

        if ( !this.options.icon ) {
            this._hiddenIcons = this.options.icons;
            this.options.icons = {};
        }

        this._superApply( arguments );

    }

});

})( jQuery );

$(function() {

    $( "a.no-icons" ).click( function( e ) {
        e.preventDefault();
        $( "button" ).button( "option", "icon", false );
    });

    $( "a.icons" ).click( function( e ) {
        e.preventDefault();
        $( "button" ).button( "option", "icon", true );
    });

    $( "button" ).button( {text: false} );
    $( ".play" ).button( "option", { icons: { primary: "ui-icon-play" } } );
    $( ".pause" ).button( "option", { icons: { primary: "ui-icon-pause" } } );
    $( ".stop" ).button( "option", { icons: { primary: "ui-icon-stop" } } );

});
