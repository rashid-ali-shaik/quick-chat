const errorHandler = (err, req, res, next) => {
  console.log(err, "error");
  res.status(500).send({ msg: err.message, stack: err.stack });
};
module.exports = errorHandler;
