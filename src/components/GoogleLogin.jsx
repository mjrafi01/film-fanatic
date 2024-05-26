import React from 'react';
import useAuth from '../hooks/userAuth';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

export const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleLogin();
      navigate('/dashboard'); // Redirect to dashboard after successful Google sign-in
    } catch (error) {
      console.error('Google Sign-in Error:', error);
      // Handle any errors if needed
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};
