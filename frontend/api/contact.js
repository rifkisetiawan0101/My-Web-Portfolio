import mongoose from 'mongoose';
import { Resend } from 'resend';

// Inisialisasi Resend dengan API Key dari Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Fungsi untuk menghubungkan ke MongoDB
async function connectToDatabase() {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    return mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

// Skema dan Model untuk Pesan
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// Ini adalah fungsi utama yang akan dijalankan oleh Vercel
export default async function handler(req, res) {
    // Mengizinkan permintaan dari semua domain (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // --- PERUBAHAN DI SINI: Log untuk Debugging ---
    // Ini untuk memastikan variabel environment Anda terbaca dengan benar di server Vercel
    console.log("MONGO_URI:", process.env.MONGO_URI ? "Loaded" : "Not Loaded");
    console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "Loaded" : "Not Loaded");
    console.log("MY_EMAIL:", process.env.MY_EMAIL ? "Loaded" : "Not Loaded");
    // --- AKHIR PERUBAHAN ---

    try {
        await connectToDatabase();

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.MY_EMAIL,
            subject: `New Message from Portfolio: ${name}`,
            html: `
                <h3>New message from your portfolio contact form!</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        // --- PERUBAHAN DI SINI: Penanganan Error Resend ---
        if (error) {
            console.error("Resend Error:", error);
            // Kirim pesan error yang lebih spesifik ke frontend
            return res.status(400).json({ error: error.message });
        }
        // --- AKHIR PERUBAHAN ---

        return res.status(200).json({ success: 'Message sent and saved successfully!' });

    } catch (error) {
        console.error('Error in /api/contact:', error);
        // --- PERUBAHAN DI SINI: Mengirim pesan error yang lebih jelas ---
        return res.status(500).json({ error: error.message || 'An error occurred on the server.' });
        // --- AKHIR PERUBAHAN ---
    }
}
