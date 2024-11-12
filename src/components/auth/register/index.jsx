import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';
import LoginPageBG2 from "../../../components/Assets/LoginPageBG2.jpg";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { userLoggedIn } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message);
                setIsRegistering(false);
            }
        }
    };

    if (userLoggedIn) {
        return <Navigate to='/home' />;
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
            <div className="w-96 bg-white/90 text-gray-600 p-6 rounded-lg space-y-6 shadow-md">
                <div className="text-center space-y-2">
                    <h3 className="text-gray-800 text-2xl font-bold tracking-wide">
                        Create a New Account
                    </h3>
                    <p className="text-gray-600">Sign up to continue</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="space-y-1">
                        <label className="text-sm text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
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
                            placeholder='Enter your password'
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm text-gray-700 font-semibold">Confirm Password</label>
                        <input
                            type="password"
                            placeholder='Re-enter your password'
                            autoComplete="off"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                        disabled={isRegistering}
                        className={`w-full py-3 font-medium rounded-lg text-white ${
                            isRegistering
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'bg-indigo-500 hover:bg-indigo-600'
                        }`}
                    >
                        {isRegistering ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-700">
                    Already have an account?{' '}
                    <Link
                        to={'/login'}
                        className="text-indigo-500 hover:text-indigo-700 font-semibold"
                    >
                        Continue
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Register;
