
(function( $, undefined ) {

$.widget( "ab.nav", $.ui.tabs, {

    _initialActive: function() {

        var path = location.pathname,
            path = path.substring( path.search( /[^\/]+$/ ) ),
            tabs = this.tabs,
            $active = tabs.find( "> a[href$='" + path + "']" );

        return tabs.find( "a" )
                   .index( $active );

    },

    _eventHandler: function( event ) {

        window.open( $( event.target ).attr( "href" ), "_self" );

    },

    _createPanel: function( id ) {

        var panel = this.element.find( "> div:first" );
        
        if ( !panel.hasClass( "ui-tabs-panel" ) ) {
            panel.data( "ui-tabs-destroy", true )
                 .addClass( "ui-tabs-panel " +
                            "ui-widget-content " +
                            "ui-corner-bottom" );
			     
        }

        return panel;

    },

    _getPanelForTab: function( tab ) {

        return this.element.find( "> div:first" );

    },

    load: $.noop

});

})( jQuery );

$(function() {

    $( "#nav" ).nav();

});
