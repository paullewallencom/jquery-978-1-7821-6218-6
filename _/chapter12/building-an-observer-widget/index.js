
( function( $, undefined ) {

$.widget( "ab.observer", {

    options: {

        observables: [
            {
                widget: $.ui.accordion,
                events: [
                    "activate",
                    "beforeActivate",
                    "create"
                ]
            },
            {
                widget: $.ui.menu,
                events: [
                    "blur",
                    "create",
                    "focus",
                    "select"
                ]
            },
            {
                widget: $.ui.tabs,
                events: [
                    "activate",
                    "beforeActivate",
                    "create"
                ]
            }
        ]

    },

    _getEvents: function() {

        var events = {};

        $.each( this.options.observables, function ( i, v ) {

            var prefix = v.widget.prototype.widgetEventPrefix;

            $.each( v.events, function( i, v ) {
                events[ prefix + v.toLowerCase() ] = "_event";
            });
            
        });

        return events;

    },

    _create: function() {

        this._super();

        var dialogId = "ui-observer-dialog-" + this.uuid,
            dialogSettings = {
                minHeight: 300,
                maxHeight: 300,
                position: {
                    my: "right top",
                    at: "right top"
                },
                title: this.element.selector
            };

        this.dialog = $( "<div/>" ).attr( "id", dialogId )
                                   .attr( "title", "Observer" )
                                   .addClass( "ui-observer" )
                                   .appendTo( "body" )
                                   .dialog( dialogSettings );

        this._on( this.element, this._getEvents() );
     
    },

    _event: function( e, ui ) {

        var eventClasses = "ui-observer-event " +
                           "ui-observer-event-border",
            $event = $( "<div/>" ).prependTo( this.dialog )
                                  .addClass( eventClasses ),
            time = new Date( e.timeStamp ).toLocaleTimeString();
        
        $( "<span/>" ).html( e.type )
                      .appendTo( $event );

        $( "<span/>" ).html( time )
                      .addClass( "ui-observer-event-timestamp" )
                      .appendTo( $event );

        this.dialog.find( ".ui-observer-event:last" )
                   .removeClass( "ui-observer-event-border" );

    },

    _destroy: function() {

        this._super();
        this.dialog.dialog( "destroy" )
                   .remove();

    }

});

})( jQuery );

$(function() {

    $( document ).observer();

    $( "#accordion" ).accordion();
    $( "#menu" ).menu();
    $( "#tabs" ).tabs();

});
