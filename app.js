const express = require("express");
const app = express();
const recruitmentRoutes = require("./routes/recruitmentRoutes/route.js");
const talentRoutes = require("./routes/talentRoutes/route.js");
const employeeRoutes = require("./routes/employeeRoutes/route.js");

app.use("/recruitment", recruitmentRoutes);
app.use("/talent", talentRoutes);
app.use("/employee", employeeRoutes);

module.exports = app;