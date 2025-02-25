import "./style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import useAppStore from "../../zustand/store";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAppStore();

  // States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle Confirm Password Visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Handle Signup
  const handleSignup = async (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      console.log("Form Submitted", values);
      const response = await signup(values);
      setSubmitting(false);

      if (response.status === "success") {
        toast.success("Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/signin"), 2000);
      } else if (response.status === "already exists") {
        toast.error("User already exists. Please try logging in.");
      } else {
        toast.error("Signup failed. Please try again later.");
      }
    } catch (error) {
      console.error("Signup error", error);
      toast.error("An error occurred. Please try again.");
      setSubmitting(false);
    }
  };

  // Component
  return (
    <>
      <ToastContainer />
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div
            className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80)",
            }}
          >
            <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0"></div>
            <div
              className="absolute triangle  min-h-screen right-0 w-16"
              style={{}}
            ></div>
            <p className="flex absolute top-5 text-center text-gray-100 focus:outline-none">
              <span className="text-xl ml-3">
                {" "}
                {/* ✅ Change <p> to <span> */}
                Dev<strong>Learn</strong>
              </span>
            </p>

            <img
              src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
              className="h-96 absolute right-5 mr-5"
            />
            <div className="w-full  max-w-md z-10">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Dev Learn
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                {" "}
                Welcome to our platform, where learning meets AI! Unlock
                personalized quizzes that challenge your skills and help you
                grow. After completing each quiz, get an instant performance
                report along with tailored resources to help you improve. Start
                your journey today and watch your skills evolve with every quiz
                you take!
              </div>
            </div>
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Join Us!
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please sign up to create your account
                </p>
              </div>

              <Formik
                initialValues={{
                  name: "",
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSignup}
              >
                {({ isSubmitting }) => (
                  <Form className="mt-8 space-y-6">
                    {/* Name */}
                    <div className="relative flex flex-col items-start">
                      <label className="ml-3 text-sm font-bold text-gray-700">
                        Name
                      </label>
                      <Field
                        className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Username */}
                    <div className="relative flex flex-col items-start">
                      <label className="ml-3 text-sm font-bold text-gray-700">
                        Username
                      </label>
                      <Field
                        className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                        name="username"
                        type="text"
                        placeholder="Enter Username"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative flex flex-col items-start">
                      <label className="ml-3 text-sm font-bold text-gray-700">
                        Email
                      </label>
                      <Field
                        className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Password */}
                    <div className="mt-8 flex flex-col items-start relative">
                      <label className="ml-3 text-sm font-bold text-gray-700">
                        Password
                      </label>
                      <div className="relative w-full">
                        <Field
                          className="w-full text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                        />
                        <span
                          className="absolute right-4 top-3 cursor-pointer"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-8 flex flex-col items-start relative">
                      <label className="ml-3 text-sm font-bold text-gray-700">
                        Confirm Password
                      </label>
                      <div className="relative w-full">
                        <Field
                          className="w-full text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Enter Confirm Password"
                        />
                        <span
                          className="absolute right-4 top-3 cursor-pointer"
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                      >
                        {isSubmitting ? "Signing Up..." : "Sign Up"}
                      </button>
                    </div>

                    {/* Already have account */}
                    <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                      <span>Already Have an Account?</span>
                      <Link
                        to="/signin"
                        className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                      >
                        Sign in
                      </Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
