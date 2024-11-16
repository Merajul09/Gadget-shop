import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "your title";
    } else {
      document.title = `Error Page - ${
        location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)
      }`;
    }
  }, [location.pathname]);
  return (
    <div>
      <div className="flex items-center dark:bg-gray-50 dark:text-gray-800 bg-gray-50">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto md:flex-row text-gray-700">
          <div className="w-full lg:w-1/2 mx-8">
            <div className="text-7xl text-teal-400 font-dark font-extrabold mb-8">
              404
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              Sorry we could not find the page you are looking for{" "}
              <span className="text-teal-400 font-bold">
                {location.pathname.charAt(1).toUpperCase() +
                  location.pathname.slice(2)}
              </span>
            </p>

            <a
              href="/"
              className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-teal-400 active:bg-cyan-600 hover:bg-cyan-700"
            >
              Back to homepage
            </a>
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img
              src="https://raw.githubusercontent.com/Merajul09/StockImage/main/image/error/404-error.svg"
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
