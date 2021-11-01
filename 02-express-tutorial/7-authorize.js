// const authorize = (req, res, next) => {
//   console.log("authorize");
//   next();
// };

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "sherdil") {
    req.user = { name: "john", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
