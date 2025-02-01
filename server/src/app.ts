import express, { Application, Request, Response } from "express";
import { OK } from "./config/constant"; // Ensure correct path to constants
import { healthRouter } from "./routes/health.routes";
import errorHandler from "./middlewares/errorHandler.middleware";

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use(healthRouter);

// Error handling middleware
app.use(errorHandler);

export { app };
