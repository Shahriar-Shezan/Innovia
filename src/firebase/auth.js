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
    const user = userCredential.user; 
    console.log("Signed-in user:", user);
    return user; 
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error; 
  }
};


export const doSignOut = () => {
  return auth.signOut();
};


export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};


export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};


export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
