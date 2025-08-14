import { z } from 'zod';

// In-memory storage for demo purposes
// In production, you'd use a database
const consultationRequests = new Map();

const insertConsultationRequestSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  serviceRequired: z.string().min(1, "Service required is mandatory")
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const validatedData = insertConsultationRequestSchema.parse(req.body);
    const id = crypto.randomUUID();
    const request = {
      ...validatedData,
      id,
      createdAt: new Date()
    };
    
    consultationRequests.set(id, request);
    
    res.status(200).json({ success: true, id: request.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: "Invalid form data", details: error.errors });
    } else {
      res.status(500).json({ error: "Failed to submit consultation request" });
    }
  }
}
