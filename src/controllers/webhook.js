import { fbController } from "./fbController.js";

export const webhookController = {
  verifyPlatform(req, res) {
    const { platform } = req.query;
    switch (platform) {
      case "facebook":
        fbController.verifyWebhook(req, res);
        break;

      default:
        break;
    }
  },
  
  selectPlatform(req, res) {
    const { platform } = req.query;
    switch (platform) {
      case "facebook":
        fbController.webhookEventHandler(req, res);
        break;

      default:
        break;
    }
  },
};
