import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import customAxios from "../utils";
import { Link, useNavigate, redirect } from "react-router-dom";
import { loginUser } from "../redux/features/authSlice";

export function loginLoader(store) {
  const { user } = store.getState().auth;
  if (user) {
    toast.warn("please logout");
    return redirect("/");
  }
  return null;
}

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    const values = [...formData.values()];
    // check if all values are present
    if (values.some((value) => value === "")) {
      toast.warn("Please fill all fields");
      return;
    }
    console.log(values);
    try {
      const { data } = await customAxios.post("/auth/login", entries);
      dispatch(loginUser({ data }));
      toast.success("User logged in successfully 🎉");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    // clear all entries
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link
            to="/register"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
