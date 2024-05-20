import { Router } from "express";
import { generateProducts } from "../controllers/productController.js";

const productRoutes = Router();

productRoutes.post("/", generateProducts);

export default productRoutes;