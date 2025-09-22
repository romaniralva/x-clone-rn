import { aj } from "../config/arcjet.js";

// Arcjet middleware for rate limiting, bot protection and security

export const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1, // each reqeust consumes 1 token
    });
    // handle denied reqeust
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({
          error: "Too many Requests",
          message: "Rate limit exceeded. Please try again later.",
        });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({
          error: "Bot access denied",
          message: "Automated reqeusts are not allowed.",
        });
      } else {
        return res.status(403).json({
          error: "Forbidden",
          message: "Access denied by security policy",
        });
      }
    }
    // check fro spoofed bots
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      return res.status(403).json({
        error: "Spoofed bot detected",
        message: "Malicious bot activity detected.",
      });
    }
    next();
  } catch (error) {
    console.error("Arcject middleware error:", error);
    // allow request to coninue if Arcjet fails
    next();
  }
};
