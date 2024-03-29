import express from "express";
import { webhookController } from "../controllers/webhook.js";

const router = express.Router();

router.get("/", webhookController.verifyPlatform);
router.post("/", webhookController.selectPlatform);

export default router;
