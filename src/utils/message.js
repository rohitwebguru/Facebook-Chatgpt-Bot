import axios from "axios";

import { config as env } from "dotenv";
env();

const TOKEN = process.env.TOKEN;
const PAGE_ID = process.env.PAGE_ID;

export const sendMessage = async (senderId, message) => {
  let options = {
    method: "POST",
    url: "https://graph.facebook.com/v2.6/me/messages",
    params: {
      access_token: TOKEN,
    },
    headers: { "Content-Type": "application/json" },
    data: {
      recipient: { id: senderId },
      messaging_type: "RESPONSE",
      message: { text: message },
    },
  };
  let response = await axios.request(options);
  if (response["status"] == 200 && response["statusText"] === "OK") {
    return 1;
  } else {
    return 0;
  }
};

export const setTypingOn = async (senderId) => {
  let options = {
    method: "POST",
    url: `https://graph.facebook.com/v19.0/${PAGE_ID}/messages`,
    params: {
      access_token: TOKEN,
    },
    headers: { "Content-Type": "application/json" },
    data: {
      recipient: { id: senderId },
      sender_action: "typing_on",
    },
  };
  let response = await axios.request(options);
  if (response["status"] == 200 && response["statusText"] === "OK") {
    return 1;
  } else {
    return 0;
  }
};

export const setTypingOff = async (senderId) => {
  let options = {
    method: "POST",
    url: `https://graph.facebook.com/v19.0/${PAGE_ID}/messages`,
    params: {
      access_token: TOKEN,
    },
    headers: { "Content-Type": "application/json" },
    data: {
      recipient: { id: senderId },
      sender_action: "typing_off",
    },
  };
  let response = await axios.request(options);
  if (response["status"] == 200 && response["statusText"] === "OK") {
    return 1;
  } else {
    return 0;
  }
};
