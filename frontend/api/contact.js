// Mengimpor paket-paket yang diperlukan
import mongoose from 'mongoose';
import { Resend } from 'resend';

// Inisialisasi Resend dengan API Key dari Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Fungsi untuk menghubungkan ke MongoDB
// Kita buat ini agar koneksi bisa digunakan kembali
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
// Kita definisikan di luar handler agar tidak dibuat ulang setiap kali
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Mencegah error jika model sudah ada
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// Ini adalah fungsi utama yang akan dijalankan oleh Vercel
export default async function handler(req, res) {
    // Mengizinkan permintaan dari semua domain (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Menangani pre-flight request dari browser
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Hanya izinkan metode POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        await connectToDatabase();

        const { name, email, message } = req.body;

        // 1. Validasi input
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // 2. Simpan pesan ke database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // 3. Kirim email notifikasi menggunakan Resend
        await resend.emails.send({
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

        // 4. Kirim respons sukses ke frontend
        return res.status(200).json({ success: 'Message sent and saved successfully!' });

    } catch (error) {
        console.error('Error in /api/contact:', error);
        return res.status(500).json({ error: 'An error occurred on the server.' });
    }
}