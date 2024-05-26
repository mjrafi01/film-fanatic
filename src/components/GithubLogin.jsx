import React from 'react'
import useAuth from '../hooks/userAuth';
import { FaGithub } from 'react-icons/fa';


export const GithubLogin = () => {


      const { githubLogin } = useAuth();

  const handleGithubSignIn = () => {
    githubLogin();
  };
  return (
    <button onClick={handleGithubSignIn} className="btn w-full mt-4">
        <div className="flex items-center gap-2">
          <FaGithub size={24} />
          <p>GitHub</p>
        </div>
      </button>
  )
}
