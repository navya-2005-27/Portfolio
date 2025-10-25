import { RequestHandler } from "express";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional().default(""),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: ContactFormData;
}

export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const validatedData = contactFormSchema.parse(req.body);

    // TODO: Save to Supabase database
    // Once Supabase is connected, implement the database save here
    console.log("Contact form submission received:", validatedData);

    // For now, just return success
    // In production, this would save to the database
    const response: ContactResponse = {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
      data: validatedData,
    };

    res.json(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    } else {
      console.error("Error processing contact form:", error);
      res.status(500).json({
        success: false,
        message: "Failed to process your message. Please try again.",
      });
    }
  }
};
