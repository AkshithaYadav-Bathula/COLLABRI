# 📚 COLLABRI – Collaborative Learning Platform 

**Collabri** is the backend API for a full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) application built to promote collaborative academic learning. This backend handles user authentication, database interactions, and secure communication between the client and server.

---

## 🚀 Key Features

- 🔐 Secure user registration & login
- 🔒 Password hashing using `bcryptjs`
- 🛡️ JWT-based token authentication
- 🌐 Cross-Origin Resource Sharing (CORS) enabled
- ☁️ MongoDB Atlas integration via Mongoose
- 🔄 RESTful API design for seamless frontend consumption
- 📫 Environment-specific configuration using `.env`
- 🧪 API tested with Postman
- 🧱 Modular, scalable architecture

---

## 🧰 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Runtime      | [Node.js](https://nodejs.org/)  
| Framework    | [Express.js](https://expressjs.com/)  
| Database     | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
| ODM          | [Mongoose](https://mongoosejs.com/)  
| Auth & Crypto| [JWT](https://jwt.io/), [bcryptjs](https://www.npmjs.com/package/bcryptjs)  
| Env Handling | [dotenv](https://www.npmjs.com/package/dotenv)  
| Testing Tool | [Postman](https://www.postman.com/)  

---

## 📦 API Endpoints

### 🔐 `POST /api/auth/register`

Registers a new user.

#### 🔸 Request Body

```json
{
  "name": "Akshitha",
  "email": "akshitha@example.com",
  "password": "secure987"
}
```
##### 🔸 Successful Response (201) 

```json
{
  "message": "User registered",
  "token": "<JWT_TOKEN>",
  "user": {
    "name": "Akshitha",
    "email": "akshitha@example.com"
  }
}
```
 
🔸 Error: Email already registered (400)
``` json
{
  "error": "User already exists"
}
```

### 🔐  `POST /api/auth/login`
Authenticates an existing user.

🔸 Request Body
``` json
{
  "email": "akshitha@example.com",
  "password": "secure987"
}
```

🔸 Successful Response (200)
``` json
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>",
  "user": {
    "name": "Akshitha",
    "email": "akshitha@example.com"
  }
}
```


🔸 Error: Invalid credentials (400)
``` json
{
  "error": "Invalid password"
}
```

🔐 Environment Setup (.env)
Create a .env file in the /backend directory with the following variables:

``` env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/collabri?retryWrites=true&w=majority
JWT_SECRET=collabriSuperKey123
```

⚠️ Important: Do not commit your .env file to GitHub. Add it to .gitignore.


▶️ Running the Backend Locally


Navigate to the backend directory:

 ```bash
cd backend
```

Install dependencies:

 ```bash
npm install
```


Start the server:
 ```bash
npm run dev    # Uses nodemon (recommended)
```
  or 
 ```bash
node index.js  # Basic start
``` 


Backend will run at:
``` json
http://localhost:5000
```

