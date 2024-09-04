import { Router } from "express";
import { getDashboardMetrics } from "../Controllers/dashboardController";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;
