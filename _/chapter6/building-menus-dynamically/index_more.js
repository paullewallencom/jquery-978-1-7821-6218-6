
(function( $, undefined ) {

$.widget( "ab.menu", $.ui.menu, {

    options: {
        data: false
    },

    _create: function() {

        this._super();

        if ( !this.options.data ) {
            return;
        }

        var self = this;

        $.each( this.options.data, function( i, v ) {
            self._insertItem( v, self.element );
        });

        this.refresh();

    },

    _insertItem: function( item, parent ) {

        var $li = $( "<li/>" ).appendTo( parent );

        $( "<a/>" ).attr( "id", item.id )
                   .attr( "href", item.href )
                   .text( item.text )
                   .appendTo( $li );

        if ( item.data ) {

            var $ul = $( "<ul/>" ).appendTo( $li ),
                self = this;

            $.each( item.data, function( i, v ) {
                self._insertItem( v, $ul );
            });

        }

    }

});

})( jQuery );

$(function() {

    $( "#menu" ).menu({
        data: [
            {
                id: "fourth",
                href: "#",
                text: "Fourth Item"
            },
            {
                id: "fifth",
                href: "#",
                text: "Fifth Item",
                data: [
                    {
                        id: "sixth",
                        href: "#",
                        text: "Sixth Item"
                    },
                    {
                        id: "seventh",
                        href: "#",
                        text: "Seventh Item"
                    }
                ]
            }
        ]
    });

});
