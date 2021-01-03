
( function( $, undefined ) {

$.widget( "ab.checklist", {

    options: {
        items: "> li",
        widgetClasses: [
            "ui-checklist",
            "ui-widget",
            "ui-widget-content",
            "ui-corner-all"
        ],
        itemClasses: [
            "ui-checklist-item",
            "ui-corner-all"
        ],
        checkedClass: "ui-checklist-checked"
    },

    _getCreateEventData: function() {

        var items = this.items,
            checkedClass = this.options.checkedClass;
        
        return {
            items: items.length,
            checked: items.filter( "." + checkedClass ).length
        }

    },

    _create: function() {

        this._super();

        var classes = this.options.widgetClasses.join( " " );

        this.element.addClass( classes );

        this._on({
            "click .ui-checklist-item": this._click,
        });

        this.refresh();
        
    },

    _destroy: function() {

        this._super();

        var widgetClasses = this.options.widgetClasses.join( " " ),
            itemClasses = this.options.itemClasses.join( " " ),
            checkedClass = this.options.checkedClass;

        this.element.removeClass( widgetClasses );

        this.items.removeClass( itemClasses )
                  .removeClass( checkedClass )
                  .removeAttr( "aria-checked" );

    },

    _click: function( e ) {

        e.preventDefault();
        this.check( this.items.index( $( e.currentTarget ) ) );

    },

    refresh: function() {

        var trigger = true,
            items,
            newItems;

        if ( this.items === undefined ) {
            trigger = false;
            this.items = $();
        }

        items = this.element.find( this.options.items )
        newItems = items.not( this.items );

        items.addClass( this.options.itemClasses.join( " " ) );

        this._hoverable( newItems );
        this._focusable( newItems );

        this.items = items;

        if ( trigger ) {
            this._trigger( "refreshed",
                           null,
                           this._getCreateEventData() );
        }

    },

    check: function( index ) {

        var $item = this.items.eq( index ),
            checked;

        if ( !$item.length ) {
            return;
        }

        checked = $item.attr( "aria-checked" ) === "true" ?
                  "false" : "true";

        $item.toggleClass( this.options.checkedClass )
             .attr( "aria-checked", checked );

        this._trigger( "checked", null, this._getCreateEventData());

    }

});

})( jQuery );

$(function() {

    $( "#add" ).button({
        icons: {
            primary: "ui-icon-plus"
        },
        text: false
    });

    $( "#add" ).on( "click", function( e ) {

        var $checklist = $( "#checklist" ),
            $item = $( "<li/>" ).appendTo( checklist );

        $( "<a/>" ).attr( "href", "#" )
                   .text( "Write some documentation" )
                   .appendTo( $item );

        $checklist.checklist( "refresh" );

    });

    $( "#remove" ).button({
        icons: {
            primary: "ui-icon-minus"
        },
        text: false
    });

    $( "#remove" ).on( "click", function( e ) {

        var $checklist = $( "#checklist" ),
            $item = $checklist.find( ".ui-checklist-item:last" );

        $item.remove();
        $checklist.checklist( "refresh" );

    });

    $( "#progressbar" ).progressbar();

    $( "#checklist" ).checklist({
        create: function( e, ui ) {
            $( "#progressbar" ).progressbar( "option", {
                max: ui.items,
                value: ui.checked
            });
        },
        refreshed: function( e, ui ) {
            $( "#progressbar" ).progressbar( "option", {
                max: ui.items,
                value: ui.checked
            });
        },
        checked: function( e, ui ) {
            $( "#progressbar" ).progressbar( "value", ui.checked );
        }
    });

});
