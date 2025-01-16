import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../../../firebase/auth"; // Import the auth function
import LoginPageBG2 from "../../../components/Assets/LoginPageBG2.jpg"; // Background image

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        // Call Firebase auth function
        const user = await doSignInWithEmailAndPassword(email, password);

        // Debugging: Check the user object
        console.log("Signed-in user:", user);
        console.log("User email:", user?.email);

        // Redirect based on email
        if (user?.email?.toLowerCase() === "admin@gmail.com") {
          console.log("Redirecting to /devhome");
          navigate("/devhome"); // Redirect to devhome for this specific email
        } else {
          console.log("Redirecting to /home");
          navigate("/home"); // Redirect to home for all other users
        }
      } catch (error) {
        setErrorMessage("Invalid email or password. Please try again.");
        console.error("Error during login:", error);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  return (
    <main
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${LoginPageBG2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-96 bg-white/90 p-6 rounded-lg space-y-6 shadow-md">
        <div className="text-center space-y-2">
          <p className="text-gray-800 text-2xl font-bold tracking-wide">Welcome</p>
          <p className="text-gray-600">Sign in to continue</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {errorMessage && (
            <span className="block text-red-600 font-semibold text-center">
              {errorMessage}
            </span>
          )}

          <button
            type="submit"
            disabled={isSigningIn}
            className={`w-full py-3 font-medium rounded-lg text-white ${
              isSigningIn
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            {isSigningIn ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
