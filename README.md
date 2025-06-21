📚 COLLABRI – Collaborative Learning Platform (Backend)
Collabri is the backend API for a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application built to promote collaborative academic learning. This backend handles user authentication, database interactions, and secure communication between the client and server.

🚀 Key Features

🔐 Secure user registration & login
🔒 Password hashing using bcryptjs
🛡️ JWT-based token authentication
🌐 Cross-Origin Resource Sharing (CORS) enabled
☁️ MongoDB Atlas integration via Mongoose
🔄 RESTful API design for seamless frontend consumption
📫 Environment-specific configuration using .env
🧪 API tested with Postman
🧱 Modular, scalable architecture


🧰 Tech Stack
LayerTechnologyRuntimeNode.jsFrameworkExpress.jsDatabaseMongoDB AtlasODMMongooseAuth & CryptoJWT, bcryptjsEnv HandlingdotenvTesting ToolPostman

📦 API Endpoints
🔐 User Registration
POST /api/auth/register
Registers a new user with the platform.
🔸 Request Body
json{
  "name": "Akshitha",
  "email": "akshitha@example.com",
  "password": "secure987"
}
🔸 Successful Response (201)
json{
  "message": "User registered",
  "token": "<JWT_TOKEN>",
  "user": {
    "name": "Akshitha",
    "email": "akshitha@example.com"
  }
}
🔸 Error: Email Already Registered (400)
json{
  "error": "User already exists"
}

🔑 User Login
POST /api/auth/login
Authenticates an existing user and returns a JWT token.
🔸 Request Body
json{
  "email": "akshitha@example.com",
  "password": "secure987"
}
🔸 Successful Response (200)
json{
  "message": "Login successful",
  "token": "<JWT_TOKEN>",
  "user": {
    "name": "Akshitha",
    "email": "akshitha@example.com"
  }
}
🔸 Error: Invalid Credentials (400)
json{
  "error": "Invalid password"
}

🔐 Environment Setup
Create a .env file in the /backend directory with the following variables:
envMONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/collabri?retryWrites=true&w=majority
JWT_SECRET=collabriSuperKey123

⚠️ Important: Do not commit your .env file to GitHub. Add it to .gitignore.


▶️ Running the Backend Locally
1. Navigate to the backend directory
bashcd backend
2. Install dependencies
bashnpm install
3. Start the development server
bash# Using nodemon (recommended for development)
npm run dev

# OR basic start
node index.js
4. Access the API
The backend server will be running at: http://localhost:5000

📁 Project Structure
backend/
├── models/          # Database schemas
├── routes/          # API route handlers
├── middleware/      # Custom middleware functions
├── config/          # Database configuration
├── .env            # Environment variables (not committed)
├── .gitignore      # Git ignore rules
├── package.json    # Dependencies and scripts
└── index.js        # Main server file

🧪 Testing the API
Use Postman or any API testing tool to test the endpoints:

Register a new user: POST http://localhost:5000/api/auth/register
Login with credentials: POST http://localhost:5000/api/auth/login
Use the returned JWT token for authenticated requests (add to Authorization header as Bearer <token>)


🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request


👥 Support
If you have any questions or need help, please open an issue or contact the development team.
Happy Learning! 🎓