(function( $, undefined ) {

$.widget( "ui.accordion", $.ui.accordion, {
    
    options: {
         target: false,
         accept: false,
         header: "> h3, > div > h3"
    },

	_teardownEvents: function( event ) {

		var self = this,
            events = {};

		if ( !event ) {
			return;
		}

		$.each( event.split(" "), function( index, eventName ) {
			self._off( self.headers, eventName );
		});

    },

    _createTarget: function() {

        var self = this,
            draggableOptions = {
                handle: "h3",
                helper: "clone",
                connectToSortable: this.options.target,
            };

        this.headers.each( function() {
            $( this ).next()
                     .addBack()
                     .wrapAll( "<div/>" )
                     .parent()
                     .draggable( draggableOptions );
        });
    },

    _createAccept: function() {

        var self = this,
            options = self.options,
            target = $( options.accept ).data( "uiAccordion" );

        var sortableOptions = {

            stop: function ( event, ui ) {

                var dropped       = $(ui.item),
                    droppedHeader = dropped.find("> h3"),
                    droppedClass  = "ui-draggable",
                    droppedId;

                if ( !dropped.hasClass( droppedClass ) ) {
                    return;
                }
                
                // Get the original section ID, reset the cloned ID.
                droppedId = droppedHeader.attr( "id" );
                droppedHeader.attr( "id", "" );

                // Include dropped item in headers
                self.headers = self.element.find( options.header )

                // Remove old event handlers
                self._off( self.headers, "keydown" );
                self._off( self.headers.next(), "keydown" );
                self._teardownEvents( options.event );

                // Setup new event handlers, including dropped item.
                self._hoverable( droppedHeader );
                self._focusable( droppedHeader );
		        self._on( self.headers, { keydown: "_keydown" } );
		        self._on( self.headers.next(), { keydown: "_panelKeyDown" } );
		        self._setupEvents( options.event );

                // Perform cleanup
                $( "#" + droppedId ).parent().fadeOut( "slow", function() {
                    $( this ).remove();
                    target.refresh();
                });

                dropped.removeClass( droppedClass );

            }

        };

        this.headers.each( function() {
            $(this).next()
                   .addBack()
                   .wrapAll( "<div/>" );
        });

        this.element.sortable(sortableOptions);

    },

    _create: function() {

        this._super( "_create" );

        if ( this.options.target ) {
            this._createTarget();
        }

        if ( this.options.accept ) {
            this._createAccept();
        }

    },

    _destroy: function() {

        this._super( "_destroy" );
        
        if ( this.options.target || this.options.accept ) {

            this.headers.each( function() {
                $( this ).next()
                         .addBack()
                         .unwrap( "<div/>" );
            });
        }
    }

});

})( jQuery );

$(function() {

	$( "#target-accordion" ).accordion( { target: "#accept-accordion" } );
    $( "#accept-accordion" ).accordion( { accept: "#target-accordion" } );

});
