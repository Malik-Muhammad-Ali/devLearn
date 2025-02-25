import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAppStore from "../../zustand/store";

// Validation Schema
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
  const navigate = useNavigate();

  // Handle Profile Picture Change
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

  // Handle Update
  async function handleUpdate(values: any, { setSubmitting }: any) {
    const result = await updateUser(values, token);

    if (result.status === "success") {
      toast.success("Profile Updated Successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/dashboard", { replace: true }), 3000);
    } else if (result.status === "password incorrect") {
      toast.error("Update Failed! Previous Password is incorrect", {
        position: "top-right",
        autoClose: 3000,
      });
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
      <div className="min-h-screen flex justify-center items-center bg-gray-100 pt-10 pb-10">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Edit Profile
          </h2>

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
              <Form className="space-y-6">
                {/* Profile Picture */}
                <div className="flex flex-col items-center">
                  <label className="relative cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleProfilePicChange(e, setFieldValue)}
                    />
                    <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center overflow-hidden bg-gray-200 hover:opacity-80 transition transform hover:scale-105 shadow-md">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-600">Upload</span>
                      )}
                    </div>
                  </label>
                  <p className="text-sm text-gray-500 mt-2">
                    Click to change profile picture
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Username Field */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <ErrorMessage
                    name="username"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email Field (Read-only) */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    disabled
                    value={user?.email}
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-500 rounded-md outline-none cursor-not-allowed"
                  />
                </div>

                {/* Previous Password Field */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Previous Password
                  </label>
                  <Field
                    type="password"
                    name="previousPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <ErrorMessage
                    name="previousPassword"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* New Password Field */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    New Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    {isSubmitting ? "Updating..." : "Save Changes"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
