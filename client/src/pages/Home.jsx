/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { setUser } from "../redux/features/authSlice";
import customAxios from "../utils";
export function homeLoader(store) {
  const { user } = store.getState().auth;
  if (!user) {
    return redirect("/login");
  }
  return null;
}
const Home = () => {
  const dispatch = useDispatch();
  // const { userName } = useSelector((state) => state.auth);
  const fetchLoggedUser = async () => {
    try {
      const { data } = await customAxios.get("/user/getLoggedInUser");
      console.log(data);
      dispatch(setUser(data));
    } catch (error) {
      toast.error("error in fetching logged user");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("here");
      fetchLoggedUser();
    }
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Home;
