const homeroute = (req, res) => {
  // All the home routes logic is responsible for routing  routes
  res.status(200).json({
    message: "All the home route logic is here ",
  });
};

module.exports = homeroute;
