var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a new UserSchema Object
var ArticleSchema = new Schema({
    title: {
      type: String,
      // required: true
    },
    summary: {
      type: String,
      // required: true
    },
    comment:[{
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }]
  });
// Create model from the above schema using Mongoose model method
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;