import { Router } from "express";
import { generateMockingProducts } from "../controllers/mockingController.js";

const mockingRoutes = Router();

mockingRoutes.get("/mockingproducts", generateMockingProducts);

export default mockingRoutes;