class SiteController {
  //[GET] /
  index(req, res) {
    res.render('home');
  }

  //[GET] /news/:slug
  // show(req, res) {
  //   res.send("NEW DETAILS");
  // }
}

module.exports = new SiteController();
