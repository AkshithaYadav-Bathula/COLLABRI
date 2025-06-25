// // // import React from 'react';
// // // import { ToastContainer } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import Register from './pages/Register';

// // // function App() {
// // //   return (
// // //     <>
// // //       <Register />
// // //       <ToastContainer />
// // //     </>
// // //   );
// // // }

// // // export default App;

// // import React, { useState, useEffect } from 'react';
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import Register from './pages/Register';
// // // import Login from './pages/Login';
// // // import Dashboard from './pages/Dashboard';

// // function App() {
// //   const [currentPage, setCurrentPage] = useState('login');
// //   const [user, setUser] = useState(null);

// //   // Check if user is already logged in
// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     const userData = localStorage.getItem('user');
    
// //     if (token && userData) {
// //       setUser(JSON.parse(userData));
// //       setCurrentPage('dashboard');
// //     }
// //   }, []);

// //   const handleLoginSuccess = (userData) => {
// //     setUser(userData);
// //     setCurrentPage('dashboard');
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     setCurrentPage('login');
// //   };

// //   const switchToLogin = () => setCurrentPage('login');
// //   const switchToRegister = () => setCurrentPage('register');

// //   return (
// //     <>
// //       {/* Temporarily show only Register until you create other files */}
// //       <Register />
      
// //       {/* Uncomment these after creating Login.js and Dashboard.js
// //       {currentPage === 'login' && (
// //         <Login 
// //           switchToRegister={switchToRegister}
// //           onLoginSuccess={handleLoginSuccess}
// //         />
// //       )}
      
// //       {currentPage === 'register' && (
// //         <Register switchToLogin={switchToLogin} />
// //       )}
      
// //       {currentPage === 'dashboard' && (
// //         <Dashboard 
// //           user={user}
// //           onLogout={handleLogout}
// //         />
// //       )}
// //       */}
      
// //       <ToastContainer />
// //     </>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Home from './pages/Home';

// function App() {
//   return (
//     <>
//       <Home />
//       <ToastContainer />
//     </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;