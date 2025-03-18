const logger = (req, res, next) => {
    console.log(
      `req from ${req.hostname} || ${req.method} - ${
        req.url
      } at ${new Date().toLocaleTimeString()}`
    );
    next();
  };

  module.exports = logger;