const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //* EITHER YOU TERMINATE HERE, OR YOU PASS-ON TO NEXT MIDDLEWARE
  // res.send('Testing Home');
  next();
};

module.exports = logger;
