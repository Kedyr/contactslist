define(["backbone"], function(Backbone) 
{
   //define product model
    return  Backbone.Model.extend({
        defaults: {
            photo: "assets/images/placeholder.png"
        }
    });
});