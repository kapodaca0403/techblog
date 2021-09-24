const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    // redirecting user to homepage if not loggedin
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
