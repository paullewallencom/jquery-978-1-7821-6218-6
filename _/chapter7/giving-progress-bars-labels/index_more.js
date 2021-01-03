
(function( $, undefined ) {

$.widget( "ab.progressbar", $.ui.progressbar, {

    options: {
        label: false
    },

    _create: function() {

        if ( !this.options.label ) {
            return this._super();
        }

        this.$label = $( "<div/>" ).addClass( "ui-progressbar-label" )
                                   .appendTo( this.element );

        this._super();

    },

    _destroy: function() {

        if ( !this.options.label ) {
            return this._super();
        }

        this.$label.remove();

        this._super();
        
    },

	_refreshValue: function() {

        if ( !this.options.label ) {
            return this._super();
        }

        this.$label.text( this._percentage().toFixed( 0 ) + "%" );

        this._super();

	},

});

})( jQuery );

$(function() {

    $( "#network-utilization" ).progressbar({
        value: 746586112,
        max: 1073741824,
        label: true
    });

    $( "#storage-utilization" ).progressbar({
        value: 24696061952,
        max: 107374182400
    });

});
