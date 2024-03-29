import prisma from "../../prisma/prisma-client.js";
import { chatCompletion } from "../utils/openai.js";
import { sendMessage, setTypingOff, setTypingOn } from "../utils/message.js";

import { config as env } from "dotenv";
env();

export const fbController = {
  verifyWebhook(req, res) {
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    if (mode && token) {
      if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
        res.status(200).send(challenge);
      } else {
        res.sendStatus(403);
      }
    }
    res.sendStatus(403);
  },

  async webhookEventHandler(req, res) {
    try {
      let body = req.body;

      let senderId = body.entry[0].messaging[0].sender.id;
      let recipientId = body.entry[0].messaging[0].recipient.id;
      let query = body.entry[0].messaging[0].message.text;

      // Database Entry
      const dbEntry = await prisma.wp_ww_messages.create({
        data: {
          user_id: senderId,
          sender_id: senderId,
          recipient_id: recipientId,
          message: query,
          platform: "facebook",
        },
      });

      // Set Typing On Messenger
      await setTypingOn(senderId);

      // Fetch Message
      let result = await chatCompletion(
        `Please respond to this query with a joke, Query : ${query}`
      );

      // Send Message
      await sendMessage(senderId, result);

      // Database Entry Update
      await prisma.wp_ww_messages.update({
        where: {
          request_id: dbEntry.request_id,
        },
        data: {
          sender_id: senderId,
          response: result,
          is_sent: true,
        },
      });

      // Set Typing Off Messenger
      await setTypingOff(senderId);
    } catch (error) {
      console.log(error);
    }
    res.status(200).send("OK");
  },
};
