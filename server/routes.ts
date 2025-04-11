import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema, 
  insertNewsletterSubscriptionSchema 
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Your message has been sent successfully!",
        data: message
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message || "Invalid form data"
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request"
        });
      }
    }
  });

  // API route for newsletter subscriptions
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.subscribeToNewsletter(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Thank you for subscribing to our newsletter!",
        data: subscription
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message || "Invalid subscription data"
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your subscription"
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving messages"
      });
    }
  });

  // Get all newsletter subscriptions (for admin purposes)
  app.get("/api/newsletter", async (req, res) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.status(200).json({
        success: true,
        data: subscriptions
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving subscriptions"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
