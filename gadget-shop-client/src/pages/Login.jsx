import { FcGoogle } from "react-icons/fc";
// import useAuth from "../hooks/useAuth";

const Login = () => {
  // const auth = useAuth();
  return (
    <div className="flex">
      <div className="max-w-md mx-auto my-4 p-6 rounded-lg shadow bg-base-200 w-1/2">
        <h2 className="text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center mt-2 text-base-content">
          Don`t have an account?
          <a href="#" className="text-primary ml-1 hover:underline">
            Sign up here
          </a>
        </p>

        <div className="my-2">
          <button
            type="button"
            className="btn btn-outline btn-accent w-full gap-2"
          >
            <FcGoogle className="w-5 h-5" />
            Login with Google
          </button>
        </div>

        <div className="divider">OR</div>

        <form className="space-y-2">
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label htmlFor="password" className="label flex justify-between">
              <span className="label-text">Password</span>
              <a href="#" className="text-xs text-primary hover:underline">
                Forgot password?
              </a>
            </label>
            <input
              type="password"
              id="password"
              placeholder="•••••••"
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign in
          </button>
        </form>
      </div>
      <img
        src="https://raw.githubusercontent.com/Merajul09/StockImage/main/image/login/loginImage.jpg"
        className="w-1/2 rounded-lg"
      />
    </div>
  );
};

export default Login;
