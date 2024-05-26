import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from '../components/GoogleLogin';
import useAuth from '../hooks/userAuth';
import { GithubLogin } from '../components/GithubLogin';

export const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    await signIn(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="hero min-h-screen bg-base-200 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
          a id nisi.
        </p>
      </div>
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
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
            <div className="form-control mt-6">
              <input
                className="btn bg-red-500 text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="form-control mt-4">
            <GoogleLogin />
            <GithubLogin/>
          </div>
          <div className="mt-6">
            <p>
              New here?{" "}
              <Link to="/register" className="text-red-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
