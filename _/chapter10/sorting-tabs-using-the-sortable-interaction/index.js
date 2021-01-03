
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
            stop: $.proxy( this, "_stopped" )
        });

    },

    _destroy: function() {

        if ( this.options.sortable ) {
            this.tablist.sortable( "destroy" );
        }

        this._super();

    },

    _stopped: function( e, ui ) {
        this.refresh();
    }

});

})( jQuery );

$(function() {

    $( "#tabs" ).tabs({
        sortable: true
    });

});
