import { Router } from "express";
import { getHealthCheckUp } from "../controllers/health.controller";

const healthRouter = Router();

healthRouter.get("/getHealthCheckUp", getHealthCheckUp);

export { healthRouter };
