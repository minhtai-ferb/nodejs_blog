module.exports = {
  multipleMongooseToOject: function (mongooseArray) {
    return mongooseArray.map((mongooseArray) => mongooseArray.toObject());
  },
  mongooseToOject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
