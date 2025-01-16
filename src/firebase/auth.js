import { auth } from "./firebase"; // Ensure firebase is initialized properly
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
} from "firebase/auth";

// Create user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Sign in with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user; // The actual user object
    console.log("Signed-in user:", user);
    return user; // Return the user object
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error; // Rethrow the error to handle it in your component
  }
};

// Sign in with Google

// Sign out
export const doSignOut = () => {
  return auth.signOut();
};

// Send password reset email
export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// Change password for current user
export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

// Send email verification for current user
export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
