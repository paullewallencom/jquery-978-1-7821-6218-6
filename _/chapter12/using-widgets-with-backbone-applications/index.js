
$(function() {

    // Model and collection classes
    var Language,
        LanguageCollection;

    // View classes
    var AutocompleteView,
        LanguageView;

    // Application router
    var AppRouter;

    // Collection instance
    var languages;

    // Application and view instances
    var app,
        searchView,
        detailView;

    /**
     *
     * Class definitions
     *
     **/

    Language = Backbone.Model.extend({
        defaults: {
            title: "",
            year: null,
            authors: "",
            selected: false
        }
    });

    LanguageCollection = Backbone.Collection.extend({
        model: Language,
        localStorage: new Backbone.LocalStorage( "languages-backbone" )
    });

    AutocompleteView = Backbone.View.extend({

        events: {
            "autocompletecreate": "autocompleteCreate",
            "autocompleteselect": "autocompleteSelect",
            "autocompletechange": "autocompleteChange",
            "keyup": "keyup"
        },

        initialize: function(a) {

            this.delegateEvents();
            this.$el.autocomplete();
            this.listenTo( this.collection, "destroy", this.destroyed );

        },

        autocompleteCreate: function() {

            this.$el.autocomplete( "option", {
                source: $.proxy( this, "autocompleteSource" )
            });

        },

        autocompleteSelect: function( e, ui ) {
            Backbone.history.navigate( "lang/" + ui.item.value, true );
        },

        autocompleteChange: function( e, ui ) {

            if ( !ui.item ) {
                Backbone.history.navigate( "/", true );
            }

        },

        keyup: function( e ) {

            if ( !this.$el.val() ) {
                Backbone.history.navigate( "/", true );
            }

        },

        autocompleteSource: function( request, response ) {

            var searchAttr = this.options.searchAttr,
                displayAttr = this.options.displayAttr,
                term = request.term.toLowerCase(),
                filtered,
                mapped;

            filtered = this.collection.filter( function ( item ) {
                if ( !item.has( searchAttr ) ) {
                    return false;
                }
                return item.get( searchAttr ).toLowerCase().indexOf( term ) === 0;
            });

            mapped = filtered.map( function ( item ) {
                return item.get( displayAttr );
            });

            return response( mapped );

        },

        destroyed: function() {
            this.$el.val( "" )
                    .focus();
        }

    });

    LanguageView = Backbone.View.extend({

        events: {
            "click .delete": "deleteClick"
        },

        template: _.template( $( "#template-detail" ).html() ),

        initialize: function() {

            this.delegateEvents();
            this.listenTo( this.collection, 'change:selected', this.render );
            this.listenTo( this.collection, "destroy", this.destroyed );

        },

        render: function( model ) {

            this.$el.empty();

            if ( !model.get( "selected" ) ) {
                return;
            }
            
            this.$el.html( this.template( model.toJSON() ) );
            this.$el.find( "button" ).button();

        },

        deleteClick: function() {

            var language = languages.findWhere( {selected: true} );

            if ( language ) {
                language.destroy();
            }            

        },

        destroyed: function() {
            this.$el.empty();
            Backbone.history.navigate( "/", true );
        }

    });

    AppRouter = Backbone.Router.extend({

        routes: {
            "lang/:title": "routeLang",
            "*path": "routeDefault"
        },

        routeLang: function( lang ) {

            var language = languages.findWhere( {title: lang} );

            if ( language ) {
                language.save( {selected: true} );
            }

        },

        routeDefault: function( path ) {

            var language = languages.findWhere( {selected: true} );

            if ( language ) {
                language.save( {selected: false} );
            }
            
        }

    });

    /**
     *
     * Collection, view, and application instances
     *
     **/

    languages = new LanguageCollection([
        new Language({
            title: "C",
            year: 1972,
            authors: "Dennis Ritchie"
        }),
        new Language({
            title: "C++",
            year: 1983,
            authors: "Bjarne Stroustrup"
        }),
        new Language({
            title: "Python",
            year: 1991,
            authors: "Guido van Rossum"
        })
    ]);

    searchView = new AutocompleteView({
        el: "#search",
        collection: languages,
        searchAttr: "title",
        displayAttr: "title"
    });

    detailView = new LanguageView({
        el: ".detail",
        collection: languages
    });

    app = new AppRouter();

    Backbone.history.start({pushState:true});

});
