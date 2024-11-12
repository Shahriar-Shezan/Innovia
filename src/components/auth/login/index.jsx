import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../firebase/auth";
import { useAuth } from "../../../contexts/authContext";
import LoginPageBG2 from "../../../components/Assets/LoginPageBG2.jpg";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/home" />;
  }

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
      <div
        className="w-96 bg-white/90 p-6 rounded-lg space-y-6 shadow-md"
        style={{
          backdropFilter: "blur(4px)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)", // subtle shadow
          transition: "background-color 0.3s ease", // only color change on hover
        }}
      >
        <div className="text-center space-y-2">
          <p className="text-gray-800 text-2xl font-bold tracking-wide">
            Welcome
          </p>
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
            <label className="text-sm text-gray-700 font-semibold">
              Password
            </label>
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

        <p className="text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-indigo-500 hover:text-indigo-700 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
