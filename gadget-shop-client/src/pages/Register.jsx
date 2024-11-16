import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  const { CreateUser, GoogleSignIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    CreateUser(data.email, data.password);
    navigate("/");
  };
  const googleLogin = () => {
    GoogleSignIn().then(() => {
      navigate("/");
    });
  };
  return (
    <div className="flex flex-row-reverse">
      <div className="max-w-md mx-auto my-4 p-6 rounded-lg shadow bg-base-200 w-1/2">
        <h2 className="text-3xl font-semibold text-center">
          Register to your account
        </h2>
        <p className="text-sm text-center mt-2 text-base-content">
          Already have an account?
          <Link to="/login" className="text-primary ml-1 hover:underline">
            Sign in here
          </Link>
        </p>

        <div className="my-2">
          <button
            onClick={googleLogin}
            type="button"
            className="btn btn-outline btn-accent w-full gap-2"
          >
            <FcGoogle className="w-5 h-5" />
            Login with Google
          </button>
        </div>

        <div className="divider">OR</div>

        <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Merajul Hasan"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm font-light">
                Name is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@demo.com"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm font-light">
                Email is required
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <div className="form-control">
              <label htmlFor="password" className="label flex justify-between">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="•••••••"
                className="input input-bordered w-full"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm font-light">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm font-light">
                  Password must have at least 6 characters
                </p>
              )}
            </div>
            <div className="form-control">
              <label
                htmlFor="confirmPassword"
                className="label flex justify-between"
              >
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="•••••••"
                className="input input-bordered w-full"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Passwords not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm font-light">
                  Both password must match
                </p>
              )}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Role</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("role", { required: true })}
            >
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm font-light">
                Role is required
              </p>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
      </div>
      <img
        src="https://raw.githubusercontent.com/Merajul09/StockImage/main/image/register/registerImage.jpg"
        className="w-1/2 rounded-lg"
      />
    </div>
  );
};

export default Register;
