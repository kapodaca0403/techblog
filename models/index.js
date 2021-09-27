const user = require("./user");
const comment = require("./comment");
const post = require("./post");

comment.hasMany(post, {
  foreignKey: "comment_id",
});

post.belongsTo(user, {
  foreignKey: "comment_id",
});

module.exports = { user, comment, post };
