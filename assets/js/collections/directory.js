  define(["backbone","models/contact"], function(Backbon,Contact) 
{
    //define directory collection
    return Backbone.Collection.extend({
        model: Contact
    });

});