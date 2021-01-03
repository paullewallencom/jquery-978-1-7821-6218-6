
(function( $, undefined ) {

$.widget( "ab.progressbar", $.ui.progressbar, {

    _create: function() {

        this.$label = this.element.find( ".ui-progressbar-label" );
        this._super();

    },

    _destroy: function() {

        this.$label.remove();

        this._super();
        
    },

	_refreshValue: function() {

        this.$label.text( this._percentage().toFixed( 0 ) + "%" );
        this._super();

	},

});

})( jQuery );

$(function() {

    $( "#network-utilization" ).progressbar({
        value: 746586112,
        max: 1073741824
    });

    $( "#storage-utilization" ).progressbar({
        value: 24696061952,
        max: 107374182400
    });

});
