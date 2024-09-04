import { Router } from "express";
import { getExpensesByCategory } from "../Controllers/expenseController";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;
