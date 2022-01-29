import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "@themesberg/flowbite";

const Login = () => {
  const [tradingInfo, setInfo] = useState("");
  useEffect(() => {
    fetch(
      "https://api.tradingeconomics.com/markets/currency?c=guest:guest&cross=USD&f=json"
    )
      .then((response) => response.json())
      .then((data) => setInfo(data[5]));
  }, []);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Insert valid email")
        .required("Email can't go empty"),
      password: Yup.string().required("Password is mandatory"),
    }),
    onSubmit: (values) => {
      navigate("/login", {
        state: { email: values.email, password: values.password },
      });
    },
  });

  const { Close: currentExchange, Date } = tradingInfo;
  return (
    <>
      <div className="  min-w-min bg-black ">
        {currentExchange && Date ? (
          <div className="info-bar">
            <p className="title"> EUR $1 / USD ${currentExchange}</p>
            <p className="date">Date: {Date}</p>
          </div>
        ) : (
          ""
        )}

        <div className=" flex items-center flex-col min-h-screen h-full justify-center">
          <h1 className="text-center text-4xl text-teal-400 cursor-default font-light ">
            Login
          </h1>
          <div className="flex justify-center mt-3">
            <div className="w-full max-w-sm">
              <form
                className="bg-white rounded shadow-md px-12 pt-2 pb-8 mb-4"
                onSubmit={formik.handleSubmit}
              >
                <div className="mb-4 pt-4">
                  <label
                    className="block text-black text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-6 text gray-700 leading-light focu:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.email && formik.errors.email ? (
                  <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.email}</p>
                  </div>
                ) : null}

                <div className="mb-4 pt-6">
                  <label
                    className="block text-black text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-6 text gray-700 leading-light focu:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="**********"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.password && formik.errors.password ? (
                  <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}

                <input
                  type="submit"
                  className="bg-black w-full cursor-pointer mt-5 p-2 text-white rounded-lg uppercase hover:bg-teal-400 hover:text-black"
                  value="Login"
                />
                <div>
                  <p className="py-2 cursor-default">Forgot password?</p>
                  <button
                    className="block text-white bg-black self-end hover:bg-teal-400 hover:text-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    data-modal-toggle="forgot-password-modal"
                  >
                    Click Here
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="forgot-password-modal"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
      >
        <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                Forgot Password?
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="forgot-password-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 ">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                You can change your password for security reasons or reset it if
                you forget it. Please insert your email and we will send you the
                instructions there
              </p>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-900 mt-4 mb-2  dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="emailforpassword"
                id="emailforpassword"
                className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="forgot-password-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send instructions
              </button>
              <button
                data-modal-toggle="forgot-password-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
