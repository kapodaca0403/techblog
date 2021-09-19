const User = require("./user");
const Comment = require("./comment");
const Post = require("./post");

Comment.hasMany(Post, {
  foreignKey: "comment_id",
});

Post.belongsTo(User, {
  foreignKey: "comment_id",
});

module.exports = { user, comment, post };
