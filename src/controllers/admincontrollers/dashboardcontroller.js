const dashboard = (req, res) => {
  res.status(200).json({
    message: "Data Aer comming from the Admin Controller",
    name: "Shivam Singh",
  });
};

module.exports = {
  dashboard,
};
