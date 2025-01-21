const notFound = (req, res, next) => res.status(404).send("Unknown");

module.exports = notFound;
