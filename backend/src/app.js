const express = require("express");
const pairingRoutes = require("./routes/pairing-routes.js")

const app = express();
const port = 3000;

// Middleware:: Lets you read req.body
app.use(express.json());

app.use("/food/wine", pairingRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;