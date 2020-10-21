// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // --------------------------------------------------------------------------
  app.get("/tables", function(req, res) {
    res.render("tables", {reservedTables: tableData, waitingList: waitListData});
  });

  app.get("/reserve", function(req, res) {
    res.render("reserve");
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/home.html"));
    res.render("home");
  });
};
