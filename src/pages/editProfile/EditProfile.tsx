import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaUser,
  FaUserTag,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
} from "react-icons/fa";
import useAppStore from "../../zustand/store";
import "../signup/style.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  previousPassword: Yup.string().min(
    6,
    "Previous Password must be at least 8 characters"
  ),
  password: Yup.string().min(6, "New Password must be at least 8 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords do not match"
  ),
});

const EditProfile = () => {
  const user = useAppStore((state) => state.user);
  const token = useAppStore((state) => state.token);
  const updateUser = useAppStore((state) => state.updateUser);
  const [preview, setPreview] = useState<string | null>(
    user?.profilePic || null
  );
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setPreview(user?.profilePic || null);
  }, [user]);

  const handleProfilePicChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFieldValue("profilePic", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  async function handleUpdate(values: any, { setSubmitting }: any) {
    const result = await updateUser(values, token);
    if (result.status === "success") {
      toast.success("Profile Updated Successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/dashboard", { replace: true }), 3000);
    } else {
      toast.error("Update Failed! Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
    setSubmitting(false);
  }

  return (
    <>
      <ToastContainer />
      <div className="signup-container relative min-h-screen">
        <div className="form-container w-full max-w-2xl">
          <div className="signup-card p-8 md:p-10 animate-fadeIn">
            <div className="card-header text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Edit Profile
              </h2>
            </div>

            <Formik
              initialValues={{
                name: user?.name || "",
                username: user?.username || "",
                email: user?.email || "",
                previousPassword: "",
                password: "",
                confirmPassword: "",
                profilePic: null,
              }}
              validationSchema={validationSchema}
              onSubmit={handleUpdate}
            >
              {({ setFieldValue, isSubmitting }) => (
                <Form className="space-y-5">
                  <div className="flex flex-col items-center">
                    <label className="relative cursor-pointer group">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleProfilePicChange(e, setFieldValue)
                        }
                      />
                      <div className="w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center overflow-hidden bg-gray-100 shadow-md group-hover:shadow-lg transition-all">
                        {preview ? (
                          <img
                            src={preview}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-600 font-medium">
                            Upload
                          </span>
                        )}
                      </div>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="input-icon-container">
                        <FaUser className="animated-icon" />
                      </div>
                      <Field
                        className="form-input"
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="relative">
                      <div className="input-icon-container">
                        <FaUserTag className="animated-icon" />
                      </div>
                      <Field
                        className="form-input"
                        name="username"
                        type="text"
                        placeholder="Username"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="input-icon-container">
                        <FaEnvelope className="animated-icon" />
                      </div>
                      <Field
                        className="form-input bg-gray-100 cursor-not-allowed"
                        value={user?.email}
                        name="email"
                        type="email"
                        placeholder="Email"
                        disabled
                      />
                    </div>
                    <div className="relative">
                      <div className="input-icon-container">
                        <FaLock className="animated-icon" />
                      </div>
                      <Field
                        className="form-input"
                        name="previousPassword"
                        type="password"
                        placeholder="Previous Password"
                      />
                      <ErrorMessage
                        name="previousPassword"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="input-icon-container">
                        <FaLock className="animated-icon" />
                      </div>
                      <Field
                        className="form-input"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="New Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="relative">
                      <div className="input-icon-container">
                        <FaLock className="animated-icon" />
                      </div>
                      <Field
                        className="form-input"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="signup-button pulse w-full flex justify-center text-white p-4 rounded-lg tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Updating...
                        </div>
                      ) : (
                        "Save Changes"
                      )}
                    </button>
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

export default EditProfile;
