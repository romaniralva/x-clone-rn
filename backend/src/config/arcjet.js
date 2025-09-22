import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import { ENV } from "./env.js";

//Initialie Arcjet with security rules

export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    //shield protects your app from common attacks e.g. SQL injections, XSS, CSRF attacks
    shield({ mode: "LIVE" }),

    // bot detection - block all bots excpet search engines
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY: SEARCH_ENGINE",
        //allow legitimate search engine bots
        // see full list at thsstps://arcjet.com/bot-list
      ],
    }),

    // rate limiting with token bucket algorithm
    tokenBucket({
      mode: "LIVE",
      refillRate: 10, //tokens added per interval
      interval: 10, //interval in seconds (10s)
      capacity: 15, // maximum tokens in bucket
    }),
  ],
});
