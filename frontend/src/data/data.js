import React from 'react';
import { Gamepad2, Code, BrainCircuit, Award, Star } from 'lucide-react';

export const personalInfo = {
    name: "Rifki Setiawan",
    roles: ["Game Developer", "Fullstack Developer"],
    bio: "Digital Multimedia Engineering student who specializes in game development (Unity/C#) and fullstack website development. Experienced in the project development cycle from idea to deployment, proven by the success of being a Top 10 Finalist in the TSA Gamefest 2024 competition. Skilled in implementing gameplay mechanics, designing backend architecture, and collaborating within technical teams to efficiently achieve project goals.",
    email: "rifki.setiawan0101@gmail.com",
    cvLink: "https://drive.google.com/drive/folders/1nfHXCFGkdqJYGJe5yiUhc_whtMdLuIsx?usp=sharing",
    socials: {
        linkedin: "https://linkedin.com/in/rifki-setiawan0101",
        github: "https://github.com/rifkisetiawan0101",
        itch: "https://itch.io/profile/rstiawann",
        instagram: "https://instagram.com/rstiawann_",
    },
    profilePicture: "/Image/Profile/profile-picture-stylized.png"
};

export const skills = [
    { name: 'Unity', logo: '/Image/Skills/unity-white.png' },
    { name: 'C#', logo: '/Image/Skills/csharp.png' },
    { name: 'GitHub', logo: '/Image/Skills/github-white.png' },
    { name: 'VS Code', logo: '/Image/Skills/vs-code.png' },
    { name: 'Visual Studio', logo: '/Image/Skills/vs.png' },
    { name: 'HTML', logo: '/Image/Skills/html5.png' },
    { name: 'CSS', logo: '/Image/Skills/css3.png' },
    { name: 'JavaScript', logo: '/Image/Skills/js.png' },
    { name: 'Bootstrap', logo: '/Image/Skills/bootstrap.png' },
    { name: 'Tailwind', logo: '/Image/Skills/tailwind.png' },
    { name: 'MongoDB', logo: '/Image/Skills/mongoDB.png' },
    { name: 'Express.js', logo: '/Image/Skills/express.png' },
    { name: 'React.js', logo: '/Image/Skills/react.png' },
    { name: 'Node.js', logo: '/Image/Skills/node.png' },
    { name: 'Resend API', logo: '/Image/Skills/resend-white.png' },
    // { name: 'Next.js', logo: '/Image/Skills/next.png' },
    { name: 'PHP', logo: '/Image/Skills/php.png' },
    { name: 'MySQL', logo: '/Image/Skills/mysql.png' },
    { name: 'Vercel', logo: '/Image/Skills/vercel.png' },
    { name: 'Railway', logo: '/Image/Skills/railway.png' },
    { name: 'Python', logo: '/Image/Skills/phyton.png' },
    { name: 'C++', logo: '/Image/Skills/c++.png' },
    { name: 'Java', logo: '/Image/Skills/java.png' },
    { name: 'Processing', logo: '/Image/Skills/processing.png' },
    { name: 'Construct 3', logo: '/Image/Skills/construct3.png' },
    { name: 'Notion', logo: '/Image/Skills/notion-white.png' },
    { name: 'Trello', logo: '/Image/Skills/trello.png' },
    { name: 'Figma', logo: '/Image/Skills/figma.png' },
    { name: 'Wordpress', logo: '/Image/Skills/wordpress.png' },
];

export const projects = {
    game: [
        {
            title: "Fondness in Riveries (Under Development)",
            tags: ["2D", "Anime", "Story Rich", "Unity", "C#"],
            overview: "A narrative parenting simulation game where you step into the shoes of a mother, navigating the ups and downs of raising a child from infancy to adulthood. This game offers a concise yet profound narrative, enriched with various engaging mechanics. Through this experience, you are invited to reminisce and recall the figure of a mother from childhood to adolescence. I managed a team of 3 programmers while implementing dialogue system, save system, asynchronus transition, and mechanics.",
            contributions: [
                "Led Programmer: Managed and coordinated a team of 3 programmers.",
                "Created and managed the dialogue system for character interactions.",
                "Developed asynchronous scene transition system, ensuring smooth scene switching.",
                "Built a robust save system to store player progress using JSON.",
                "Developed core movement system including branching movement animation.",
                "Implemented comprehensive mechanics with programmer team.",
            ],
            links: { 
                itch: "https://ladahitamcreation.itch.io/fondness-in-reveries", 
                trailer: "https://youtu.be/j_vg7ThkjQE?si=sQy_GnjuOfkg9WFB",
            },
            image: "/Image/Projects/Fondness-in-Riveries.gif"
        },
        {
            title: "Mystic Market Tycoon",
            tags: ["Casual", "Single Player", "Tycoon", "Unity", "C#"],
            overview: "A a business simulation game inspired by the local vibe of Indonesia’s urban ghost market. Enjoy a fun and unique experience as you become a market tycoon, protect your market from threats, and gather materials to make your market the most popular among ghosts!.",
            contributions: [
                "Created and designed persistent data manager with singleton pattern",
                "Implemented merchant mechanics system, such as free-form placement, collect coin, upgrade and restock.",
                "Built in game tutorials with chaining coroutine to guide players throughout the gameplay.",
                "Worked together to create simple AI NPC logic, creating a lively market atmosphere.",
                "Implemented a collectible item and inventory system that allows players to gather materials for merchant upgrades.",
                "Developed an item purchase system enabling players to restock merchant supplies.",
                "Created some in-game minigames to enhance gameplay experience.",
                "And so many more..."
            ],
            links: { 
                itch: "https://ladahitamcreation.itch.io/fondness-in-reveries", 
                trailer: "https://youtu.be/CdgIDbUS7bo?si=FtTFiCepKFgrQORZ",
                github: "https://github.com/rifkisetiawan0101/MysticMarketTycoon",
            },
            image: "/Image/Projects/Mystic-Market-Tycoon.gif"
        },
        {
            title: "Cikini ke Gondangdia",
            tags: ["Casual", "Parallax", "Processing", "Java"],
            overview: "🎮✨ “Cikini ke Gondangdia” is a casual game that combines train driving simulation with parallax scrolling visuals. Players are tasked with delivering passengers in the form of cats 🐱 from Cikini Station to Gondangdia Station. With a cheerful feel and dynamic visual effects, this game presents a colorful and fun train driving experience. Each trip awards points that can be used to increase train and station capacity, creating a simple management challenge. 🎮✨",
            contributions: [
                "Sole Programmer: Designed and developed the entire game system using Java Processing.",
                "Designed and integrated parallax scrolling backgrounds to enhance visual depth and atmosphere.",
                "Implemented cats spawning and boarding logic that allows cats to board and disembark at the opposite station to earn coins.",
            ],
            links: { 
                itch: "https://ladahitamcreation.itch.io/fondness-in-reveries", 
                trailer: "https://youtu.be/vSi4UqEW16I?si=AZCeI8UZvYmT6REg",
                github: "https://github.com/rifkisetiawan0101/Cikini-Ke-Gondangdia",
            },
            image: "/Image/Projects/Cikini-ke-Gondangdia.png"
        },
    ],
    fullstack: [
        {
            "title": "Dompet Sehat Game",
            "tags": ["MERN Stack", "Gamification", "Finance", "MongoDB", "Express.js", "React.js", "Node.js"],
            "overview": "Dompet Sehat is an interactive, choice-based web game designed as a financial literacy simulation. 🧠 Players step into the shoes of a young Indonesian adult trying to manage their monthly salary for 28 days. The game tackles familiar local challenges like balancing needs vs. wants, dealing with sudden expenses, and navigating the temptations of a consumptive lifestyle. Can you make it to the next payday with your finances, happiness, and health intact? Your final balance determines your fate!.",
            "contributions": [
                "Architected and developed a full-stack MERN application from concept to deployment as a solo developer.",
                "Built a RESTful API with Node.js and Express.js to serve dynamic, randomized game events.",
                "Designed and implemented a MongoDB schema using Mongoose for game event data.",
                "Created a responsive and interactive user interface with React, managing complex game state with React Hooks (useState, useCallback).",
                "Engineered a dynamic audio system with unique sound effects for 10 different game endings.",
                "Deployed the application across a multi-platform cloud environment (MongoDB Atlas, Railway, and Vercel)."
            ],
            "links": { "live": "https://dompet-sehat-game.vercel.app/", "github": "https://github.com/rifkisetiawan0101/Dompet-Sehat-Game" },
            "image": "/Image/Projects/Dompet-Sehat-Game.png"
        },
        {
            "title": "Website Damkar Depok",
            "tags": ["2025", "Course", "Team Lead", "HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
            "overview": "Documentation under process...",
            "contributions": [
                // "Deployed the application across a multi-platform cloud environment (MongoDB Atlas, Railway, and Vercel)."
            ],
            "links": { "github": "https://github.com/rifkisetiawan0101/Website-Damkar-Depok" },
            "image": "/Image/Projects/Website-Damkar-Depok.png"
        },
    ],
    other: [
        { title: "#JagoNgobrol", image: "/Image/Projects/JagoNgobrol.png", tags: ["2025", "Course", "Team Lead", "Adobe Animate", "ActionScript 3.0"], link: "https://youtu.be/rHxLwGc80PQ?si=_5AxP2a7mBF6eNFi" },
        { title: "Manjad", image: "/Image/Projects/Manjad.png", tags: ["2024", "Course", "Team Member", "Platformer", "Rage Bait", "Construct 3"], link: "https://youtu.be/qTV3yais-3U?si=-Ee_HDULQCpfnCTx" },
        { title: "Temporary Portfolio", image: "/Image/Projects/Temporary-Portfolio.png", tags: ["2024", "Course",  "Solo", "HTML", "CSS", "JavaScript", "Bootstrap"], link: "https://github.com/rifkisetiawan0101/Temporary-Portfolio" },
        { title: "The Misbrew", image: "/Image/Projects/The-Misbrew.jpg", tags: ["2025", "Course", "Team Lead", "Autodesk Maya", "3D Animation"], link: "https://youtu.be/KhWlnyI7htA?si=xkq3DHwHTSpZwFgT" },
        { title: "Dari Ucapan, Ke Hati, dan Menjadi Rasa", image: "/Image/Projects/documenter.jpg", tags: ["2025", "Course", "Team Member", "Documenter"], link: "https://youtu.be/odorBME8NAI?si=qT9qE4PB-DeRto5lT" },
    ]
};

export const education = [
    {
        institution: "Politeknik Negeri Jakarta",
        degree: "D4 Digital Multimedia Engineering",
        period: "Ongoing",
        description: "Focusing on game development, web development, interactive multimedia, 3D animations to create innovative digital solutions.",
        logo: "/Image/Logos/pnj.png"
    },
    {
        institution: "Google Play x Unity Game Developer Training Program",
        degree: "Game Programmer Track",
        period: "Ongoing",
        description: "A structured training program under the Google Play x Unity collaboration, designed to prepare participants for the Unity Certified Associate Programmer exam. The program covers essential C# scripting concepts, data structures, scene transitions, UI interactions, debugging, optimization, and build deployment in Unity, along with source control best practices.",
        logo: "/Image/Logos/google-play.png"
    },
    {
        institution: "SMA Martia Bhakti Bekasi",
        degree: "Mathematics & Science",
        period: "2020 - 2023",
        description: "Acquired logical & critical thinking which sparked my interest in programming.",
        logo: "/Image/Logos/martia-bhakti.png"
    }
];

export const achievements = [
    { 
        title: "Top 10 Team - TSA Game Fest 2024", 
        description: "Finalist in the national competitions (Gamejam), training and exhibitons (Showcase) held by Agate Academy & DTS TSA (Talent Scouting Academy) Kominfo.", 
        logo: "/Image/Logos/agate-academy.png"
    },
    { 
        title: "Certificate of Excellence - TSA Game Fest 2024 (Agate Academy)", 
        description: "A sertificate for winning the top 10 in TSA Gamefest 2024.", 
        logo: "/Image/Logos/agate-academy.png"
    },
    { 
        title: "Sertifikat Pelatihan - TSA Game Fest 2024 (Digital Talent Scholarship)", 
        description: "A sertificate for finishing the training of TSA GameFest 2024.", 
        logo: "/Image/Logos/digitalent.jpeg"
    },
];