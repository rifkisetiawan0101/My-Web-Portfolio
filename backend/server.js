const express = require('express');
const mongoose = require('mongoose');
const { Resend } = require('resend');
const cors = require('cors');
require('dotenv').config();

const app = express(); // Inisialisasi Express
const PORT = process.env.PORT || 5000;

const resend = new Resend(process.env.RESEND_API_KEY); // Inisialisasi Resend

app.use(cors());
app.use(express.json());

// --- Koneksi ke MongoDB ---
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Berhasil terhubung ke MongoDB');
}).catch((err) => {
    console.error('Gagal terhubung ke MongoDB:', err);
});

// --- Skema dan Model untuk Pesan ---
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
const Message = mongoose.model('Message', messageSchema);


// --- Endpoint API untuk Menerima Pesan ---
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // 1. Validasi input
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Semua field harus diisi.' });
        }

        // 2. Simpan pesan ke database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // 3. Kirim email notifikasi menggunakan Resend
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Alamat dari Resend
            to: process.env.MY_EMAIL, // Email dari .env
            subject: `Pesan Baru dari Portofolio: ${name}`,
            html: `
                <h3>Anda menerima pesan baru dari form kontak portofolio!</h3>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email Pengirim:</strong> ${email}</p>
                <p><strong>Pesan:</strong></p>
                <p>${message}</p>
            `,
        });

        // 4. Kirim respons sukses ke frontend
        res.status(200).json({ success: 'Pesan berhasil dikirim dan disimpan!' });

    } catch (error) {
        console.error('Error pada endpoint /api/contact:', error);
        res.status(500).json({ error: 'Terjadi kesalahan di server.' });
    }
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
