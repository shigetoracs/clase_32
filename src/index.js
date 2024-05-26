import express from "express";
import { addLogger } from "./utils/logger.js";
import productRoutes from "./routes/productRoutes.js";
import mockingRoutes from "./routes/mockingRoutes.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(addLogger);
app.use("/products", productRoutes);
app.use("/", mockingRoutes);

app.get("/loggerTest", (req, res) => {
  req.logger.http("Este es un mensaje de http");
  req.logger.info("Este es un mensaje de info");
  req.logger.warning("Este es un mensaje de warning");
  req.logger.error("Este es un mensaje de error");
  req.logger.fatal("Este es un mensaje de fatal");
  res.send("Prueba de logs completada.");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
