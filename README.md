# 🚀 Rifki Setiawan - Personal Portfolio Website 🚀

<img src="https://komarev.com/ghpvc/?username=rifkisetiawan0101-portfolio&label=Project%20Views&color=6366f1&style=flat" alt="Project Views"/>

## ✨ Demo

You can view the live portfolio here: [**portfolio-rifki.vercel.app**](https://your-vercel-deployment-url.vercel.app/) 
*(Jangan lupa ganti dengan URL Vercel Anda yang sebenarnya)*

## 📖 Overview

This is the official repository for my personal portfolio website. This project is more than just a digital resume; it's a full-stack application designed to showcase my skills in both frontend and backend development. Built as a dynamic Single Page Application (SPA), it features a modern, interactive user interface with complex animations and a custom-built backend to handle real-world functionalities like a contact form.

The entire application, including the backend API, is deployed seamlessly on Vercel, demonstrating a modern, integrated approach to web development.

## ⚙️ Features

This portfolio is packed with features that demonstrate a wide range of technical skills:

* **Dynamic & Interactive UI:**
    * **Particle Background:** An animated, interactive particle background built with `tsParticles` that responds to mouse movement.
    * **Custom Mouse Trail:** A subtle glowing trail follows the user's cursor, enhancing the user experience.
    * **Complex CSS Animations:** Implemented various custom animations (`@keyframes`) for buttons and UI elements to create a "living" interface.
    * **Smooth Transitions:** Utilizes CSS transitions for seamless show/hide effects on project galleries and the mobile navigation menu.

* **Custom Backend API:**
    * Built a custom, server-side API using **Vercel Serverless Functions** (Node.js environment) to handle incoming data from the contact form.
    * The API validates incoming data and orchestrates a multi-step process: saving to a database and triggering an email notification.

* **Full-Stack Functionality:**
    * **Database Integration:** Successfully connected to a **MongoDB Atlas** database, implementing a Mongoose schema to store contact form messages persistently.
    * **Third-Party API Integration:** Integrated the **Resend API** for reliable, automated email notifications, sending a message to my personal inbox whenever a new contact form is submitted.

* **Responsive Design:**
    * Fully responsive layout built with Tailwind CSS, ensuring a great user experience on all devices, from mobile phones to desktop screens.

## 💻 Technology Stack

This project leverages a modern, robust, and scalable technology stack.

**Frontend:**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Backend:**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Database & APIs:**
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)

## 🛠️ How to Run Locally

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/rifkisetiawan0101/your-repo-name.git](https://github.com/rifkisetiawan0101/your-repo-name.git)
    cd your-repo-name/frontend 
    ```
    *(Pastikan Anda berada di dalam folder `frontend`)*

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    * Create a file named `.env.local` in the `frontend` directory.
    * Add the following variables, replacing the placeholder values with your actual credentials:
        ```
        MONGO_URI=your_mongodb_connection_string
        RESEND_API_KEY=your_resend_api_key
        MY_EMAIL=your_personal_email@example.com
        ```

4.  **Run the development server:**
    This project uses Vercel's development server to run the frontend and the serverless functions together.
    ```bash
    # Jika belum, install Vercel CLI
    npm install -g vercel

    # Jalankan server
    vercel dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📸 Screenshots

*(Tambahkan screenshot portofolio Anda di sini. Anda bisa drag-and-drop gambar ke dalam editor teks GitHub)*

**Home Section**
`[Your Screenshot Here]`

**Projects Section**
`[Your Screenshot Here]`

**Contact Form**
`[Your Screenshot Here]`

## 🙏 Credits

**Rifki Setiawan** 👨‍💻 Full Stack Developer & Game Programmer ([GitHub](https://github.com/rifkisetiawan0101))

---
Thanks for visiting my project repository! ✨
