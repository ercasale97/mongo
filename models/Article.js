var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a new UserSchema Object
var ArticleSchema = new Schema ({
    headline: {
        type: String,
        unique: true
    },
    summary: {
        type: String
    },
    url: {
        type: String
    },
    isSaved: {
        type: Boolean,
        default: false
    },

    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Create model from the above schema using Mongoose model method
var article = mongoose.model("Article", ArticleSchema);

module.exports = Article;