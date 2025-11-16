import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginMutation = useLogin();
  const { isAuthenticated } = useAuth();

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = (data) => {
    loginMutation.mutate({
      username: data.email,
      password: data.password,
      expiresInMins: 30,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4">Login</h2>

          {loginMutation.isError && (
            <div className="alert alert-error mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Invalid credentials. Please try again.</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email/Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email or username"
                className={`input input-bordered ${
                  errors.email ? "input-error" : ""
                }`}
                {...register("email", {
                  required: "Email/Username is required",
                })}
              />
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className={`input input-bordered ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be at least 4 characters",
                  },
                })}
              />
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary ${
                  loginMutation.isPending ? "loading" : ""
                }`}
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="divider">Test Account</div>
          <div className="text-sm text-base-content/70">
            <p>
              <strong>Username:</strong> emilys
            </p>
            <p>
              <strong>Password:</strong> emilyspass
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
