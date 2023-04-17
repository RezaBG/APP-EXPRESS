const express = require("express");

const productRoutes = require("./routes/product-routes");

const app = express();

app.use("/api", productRoutes);

app.listen(8000);
