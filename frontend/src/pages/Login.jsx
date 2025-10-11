import React, { useState } from "react";
import { CloudDownload, Eye, EyeOff } from "lucide-react"; // icon package (optional)
import axios from "axios";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";





const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error,setError]=useState(null)
  const {login} =useAuth();
const navigate =useNavigate();

  const handleChange = (e) => {


    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response =await axios.post("http://localhost:5000/api/auth/login",formData);
     
if(response.data.success){
  login(response.data.user)
  localStorage.setItem("token",response.data.token)
  if(response.data.user.role==="admin"){
      navigate('/admin-dashboard')
  }
  else{
    navigate("/emplyoee-dashboard")
  }
}

    } catch (error) {
if(error.response&& !error.response.data.success){
  setError(error.response.data.error)
}
else{
  setError("Server Error") 
}
      
    }
   
  };



  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-6">
      {/* Page Heading */}
      <h1 className="text-white text-4xl font-bold mb-8 tracking-wide text-center">
        Employee Management System
      </h1>

      {/* Login Card */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 transition transform hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Welcome Back 👋
        </h2>
        {error&&<p className="text-red-500">{error}</p>}
        <p className="text-gray-500 text-center mb-6">
          Please login to access your dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Employee Management System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
