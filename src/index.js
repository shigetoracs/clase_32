import express from "express";

import productRoutes from "./routes/productRoutes.js";
import mockingRoutes from "./routes/mockingRoutes.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/products", productRoutes);
app.use("/", mockingRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});