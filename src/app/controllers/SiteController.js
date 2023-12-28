const Course = require("../models/Course");
const {
  multipleMongooseToOject: multipleMongooseToOject,
} = require("../../util/mongoose");

class SiteController {
  //[GET] /
  async index(req, res, next) {
    // try {
    //   const data = await Course.find({});
    //   res.json(data);
    // } catch (err) {
    //   next(err);
    // }

    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToOject(courses) });
      })
      .catch(next);

    // res.render('home');
  }

  //[GET] /news/:slug
  // show(req, res) {
  //   res.send("NEW DETAILS");
  // }
}

module.exports = new SiteController();
