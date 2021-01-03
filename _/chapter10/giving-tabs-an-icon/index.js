
(function( $, undefined ) {

$.widget( "ab.tabs", $.ui.tabs, {

    _processTabs: function() {

        this._super();

        var iconTabs = this.tablist.find( "> li[data-icon]" );

        iconTabs.each( function( i, v ) {

            var $tab = $( v ),
                iconClass = $tab.attr( "data-icon" ),
                iconClasses = "ui-icon " + iconClass + " ui-tabs-icon",
                $icon = $( "<span/>" ).addClass( iconClasses ),
                $anchor = $tab.find( "> a.ui-tabs-anchor" ),
                $text = $( "<span/>" ).text( $anchor.text() );

            $anchor.empty()
                   .append( $icon )
                   .append( $text );

        });
    },

    _destroy: function() {

        var iconTabs = this.tablist.find( "> li[data-icon]" );

        iconTabs.each( function( i, v ) {

            var $anchor = $( v ).find( "> a.ui-tabs-anchor" ),
                text = $anchor.find( "> span:not(.ui-icon)" ).text();

            $anchor.empty().text( text );

        });

        this._super();

    }

});

})( jQuery );

$(function() {

    $( "#tabs" ).tabs();

});
