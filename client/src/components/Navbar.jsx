import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-800 shadow-lg w-full z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-lg font-semibold">
              Quick Chat
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <p className="text-gray-300 mr-4">
              Welcome, <span className="font-semibold">{"Rasheed"}</span>
            </p>
            <button
              onClick={() => {
                /* Add logout logic here */
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Logout
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {/* <Menu className="h-6 w-6" /> */}
              |||||
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <p className="text-gray-300 block px-3 py-2">
            Welcome, <span className="font-semibold">Rasheed</span>
          </p>
          <button
            onClick={() => {
              /* Add logout logic here */
            }}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
