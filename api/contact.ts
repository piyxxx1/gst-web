import { z } from 'zod';

// In-memory storage for demo purposes
// In production, you'd use a database
const contactSubmissions = new Map();

const insertContactSubmissionSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  serviceRequired: z.string().min(1, "Service required is mandatory"),
  message: z.string().optional()
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    const id = crypto.randomUUID();
    const submission = {
      ...validatedData,
      id,
      createdAt: new Date()
    };
    
    contactSubmissions.set(id, submission);
    
    res.status(200).json({ success: true, id: submission.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: "Invalid form data", details: error.errors });
    } else {
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  }
}
