
( function( $, undefined ) {

$.widget( "ab.dictionary", {

    options: {
        terms: [],
        mode: "select"
    },

    ttPos: $.ui.tooltip.prototype.options.position,

    _create: function() {

        this._super();

        if ( this.options.mode === "select" ) {

            this._on({
                mouseup: this._tip,
                mouseenter: this._tip
            });

        }
        else if ( this.options.mode === "hover" ) {

            this._formatTerms();
            this._createTooltip();

        }

    },

    _destroy: function() {

        this._super();
        this._destroyTooltip();

        if ( this.options.mode === "hover" ) {
            this._unformatTerms();
        }

    },

    _tip: function( e ) {

        var text = this._selectedText(),
            term = this._selectedTerm( text );

        if ( text === undefined || term === undefined ) {
            this._destroyTooltip();
            return;
        }

        if ( this.element.attr( "title" ) !== term.tip ) {
            this._destroyTooltip();
        }

        this._createTooltip( e, term );

    },

    _selectedText: function() {

        var selection, range, fragement;

        selection = window.getSelection();

        if ( selection.type !== "Range" ) {
            return;
        }

        range = selection.getRangeAt( 0 ),
        fragment = $( range.cloneContents() );

        return $.trim( fragment.text().toLowerCase() );

    },

    _selectedTerm: function( text ) {

        function isTerm( v ) {
            if ( v.term === text || v.term + "s" === text ) {
                return v;
            }
        }

        return $.map( this.options.terms, isTerm )[ 0 ];

    },

    _createTooltip: function( e, term ) {

        if ( this.options.mode === "hover" ) {
            this.element.find( ".ui-dictionary-term" ).tooltip();
            return;
        }

        if ( this.element.is( ":ui-tooltip" ) ) {
            return;
        }

        var pos = $.extend( this.ttPos, { of: e } );

        this.element.attr( "title", term.tip )
                    .tooltip( { position: pos } )
                    .tooltip( "open" );
        
    },

    _destroyTooltip: function() {

        if( this.options.mode === "hover" ) {
            this.element.find( ".ui-dictionary-term" )
                        .tooltip( "destroy" );
            return;
        }

        if ( !this.element.is( ":ui-tooltip" ) ) {
            return;
        }

        this.element.tooltip( "destroy" )
                    .attr( "title", "");

    },

    _formatTerms: function() {

        function getTerm( v ) {
            return v.term;
        }

        var text = this.element.html(),
            terms = $.map( this.options.terms, getTerm );

        $.each( this.options.terms, function( i, v ) {

            var t = v.term,
                ex = new RegExp( "(" + t + "s|" + t + ")", "gi" ),
                termClass = "ui-dictionary-term",
                formatted = "<span " +
                            "class='" + termClass + "'" +
                            "title='" + v.tip + "'" +
                            ">$1</span>";

            text = text.replace( ex, formatted );
        
        });

        this.element.html( text );
  
    },

    _unformatTerms: function() {

        var $terms = this.element.find( ".ui-dictionary-term" );

        $terms.each( function( i, v ) {
            $( v ).replaceWith( $( v ).text() );
        });

    }

});

})( jQuery );

$(function() {

    var dict = [
        {
            term: "tooltip",
            tip: "A contextual widget providing information to the user"
        },
        {
            term: "progressbar",
            tip: "A widget illustrating the progress of some task"
        },
        {
            term: "element",
            tip: "An HTML element on the page"
        },
        {
            term: "user interface",
            tip: "Components on the screen the user interacts with"
        }
    ]

    $( "p" ).dictionary({
        terms: dict,
        mode: "hover"
    });

});
