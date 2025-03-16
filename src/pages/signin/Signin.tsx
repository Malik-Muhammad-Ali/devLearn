import "./style.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import useAppStore from "../../zustand/store";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Signin = () => {
  const navigate = useNavigate();
  const { signin } = useAppStore();

  // States
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Add animated background shapes
    const container = document.querySelector(".signin-container");
    if (container) {
      const animatedBg = document.createElement("div");
      animatedBg.className = "animated-bg";

      const shape1 = document.createElement("div");
      shape1.className = "animated-bg-shape animated-bg-shape-1";

      const shape2 = document.createElement("div");
      shape2.className = "animated-bg-shape animated-bg-shape-2";

      const shape3 = document.createElement("div");
      shape3.className = "animated-bg-shape animated-bg-shape-3";

      animatedBg.appendChild(shape1);
      animatedBg.appendChild(shape2);
      animatedBg.appendChild(shape3);

      container.appendChild(animatedBg);

      // Add floating particles
      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 6 + 2;
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5}`;

        // Set random movement
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        particle.style.setProperty("--x", `${x}px`);
        particle.style.setProperty("--y", `${y}px`);

        // Set animation
        particle.style.animation = `moveParticle ${
          Math.random() * 10 + 10
        }s infinite alternate ease-in-out`;

        container.appendChild(particle);
      }
    }
  }, []);

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle Signin
  const handleSignin = async (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await signin(values);
      setSubmitting(false);

      if (response.status === "success") {
        toast.success("Signin successful! Redirecting to Dashboard");
        setTimeout(() => navigate("/dashboard", { replace: true }), 2000);
      } else if (response.status === "not found") {
        toast.error("User not found. Please sign up first.");
      } else {
        toast.error("Signin failed. Please try again later.");
      }
    } catch (error) {
      console.error("Signin error", error);
      toast.error("An error occurred. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="signin-container relative min-h-screen">
        {/* Animated background */}
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

        <div className="form-container">
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>

          <div
            className={`signin-card p-8 ${
              mounted ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            <div className="card-header text-center">
              <span className="brand-logo">
                Dev<strong>Learn</strong>
              </span>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-sm text-slate-600">
                Sign in to continue your learning journey
              </p>
            </div>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SigninSchema}
              onSubmit={handleSignin}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {/* Email */}
                  <div className="relative">
                    <div className="input-icon-container">
                      <FaEnvelope className="animated-icon" />
                    </div>
                    <Field
                      className="form-input w-full text-base py-3 rounded-lg border focus:outline-none"
                      name="email"
                      type="email"
                      placeholder=" "
                    />
                    <label className="floating-label">Email</label>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Password */}
                  <div className="relative mt-6">
                    <div className="input-icon-container">
                      <FaLock className="animated-icon" />
                    </div>
                    <Field
                      className="form-input w-full text-base py-3 rounded-lg border focus:outline-none"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder=" "
                    />
                    <label className="floating-label">Password</label>
                    <div
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Remember me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="custom-checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-slate-600"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <Link
                        to="/forgot-password"
                        className="forgot-password-link text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="signin-button pulse w-full flex justify-center text-white p-4 rounded-lg tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Signing In...
                        </div>
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </div>

                  {/* Don't have account */}
                  <div className="flex items-center justify-center mt-8 text-center text-sm text-slate-600">
                    <span>Don't have an account?</span>
                    <Link
                      to="/signup"
                      className="signup-link ml-2 text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                    >
                      Sign up
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
