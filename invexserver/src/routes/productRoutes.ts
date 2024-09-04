import { Router } from "express";
import { createProduct, getProducts } from "../Controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);

export default router;
