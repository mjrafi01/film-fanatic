import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from '../components/GoogleLogin';
import useAuth from '../hooks/userAuth';
import { GithubLogin } from '../components/GithubLogin';

export const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
      return;
    }

    try {
      await createUser(email, password);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
      <div className="hero-content flex flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  name="confirm_password"
                  required
                />
              </div>
              {!passMatch && (
                <div className="my-2">
                  <p className="text-red-500">Passwords do not match!</p>
                </div>
              )}
              <div className="form-control mt-6">
                <input
                  className="btn bg-red-500 text-white"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <div className="form-control mt-4">
              <GoogleLogin />
              <GithubLogin/>
            </div>
            <div className="mt-6">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
