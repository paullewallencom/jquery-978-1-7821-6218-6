
(function( $, undefined ) {

$.widget( "ab.tabs", $.ui.tabs, {

    options: {
        sotable: false
    },

    _create: function() {

        this._super();

        if ( !this.options.sortable ) {
            return;
        }

        this.tablist.sortable({
            axis: "x",
            start: $.proxy( this, "_started" ),
            stop: $.proxy( this, "_stopped" )
        });

    },

    _destroy: function() {

        if ( this.options.sortable ) {
            this.tablist.sortable( "destroy" );
        }

        this._super();

    },

    _started: function( e, ui ) {
        ui.item.addClass( "ui-tab-move" );
    },

    _stopped: function( e, ui ) {
        ui.item.removeClass( "ui-tab-move" );
        this.refresh();
        this._activate( ui.item.index() );
    }

});

})( jQuery );

$(function() {

    $( "#tabs" ).tabs({
        sortable: true
    });

});
