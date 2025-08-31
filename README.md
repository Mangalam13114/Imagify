📸 Imagify

Imagify is a full-stack AI-powered image generation web app.
It allows users to generate creative images from text prompts, manage credits, and download results — all with a modern and responsive UI.

✨ Features

🚀 Generate AI-based images from text prompts

🔑 User authentication (login/signup)

💳 Credits system (buy & use credits for image generation)

📥 Download generated images

📱 Responsive UI built with React + Tailwind CSS

🛠️ Tech Stack

Frontend (Client)

React (Vite)

Tailwind CSS

Axios

React Toastify

Backend (Server)

Node.js + Express

dotenv for environment variables

(MongoDB / Database if connected)

📂 Project Structure
Imagify/
│── client/          # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Pages (Home, Result, Buycredit)
│   │   ├── context/      # Context API for state
│   │   └── assets/       # Static images/icons
│   └── package.json
│
│── server/          # Node.js/Express backend
│   └── .env         # Environment variables
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/Imagify.git
cd Imagify

2️⃣ Setup Client
cd client
npm install
npm run dev


Frontend will run at: http://localhost:5173

3️⃣ Setup Server
cd ../server
npm install
npm start


Backend will run at: http://localhost:5000
 (default)

🔑 Environment Variables

Inside server/.env, add:

PORT=5000
MONGO_URI=your_database_url_here
JWT_SECRET=your_secret_key
CLOUD_API_KEY=your_ai_or_image_api_key

🎯 Usage

Register/Login

Add credits (if required)

Enter your text prompt

Generate → Download your image

📸 Screenshots
Home Page	Generate Page	Result Page

	
	
🤝 Contributing

Contributions are welcome! 🎉

Fork this repo

Create a new branch (feature/your-feature)

Commit your changes

Open a Pull Request

📜 License

MIT License © 2025 Kumar Mangalam
