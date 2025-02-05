import { connectDb } from "@/lib/connectDb";
import Contact from "@/models/Contact";

export async function POST(req, res) {
  await connectDb();

  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
