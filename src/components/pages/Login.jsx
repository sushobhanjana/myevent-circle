import React, { useState } from "react";
import { authenticateUser } from "../../helpers/Authentication";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setSessionStorage } from "../../helpers/sessionStorage";

import LoginLogo from "../../assets/login_logo.png";
import EyeIcon from "../../assets/eye.svg";

export default function Login({ setIsAuthenticated }) {
  const [invalidCredential, setInvalidCredential] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (authenticateUser(values.name, values.password)) {
        setIsAuthenticated(true);
        setSessionStorage("user", { name: values.name });
        navigate("/");
      } else {
        setInvalidCredential("Invalid Credential");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-image bg-cover bg-center">
      <div className="max-w-md w-full rounded-lg p-8">
        <div className="flex justify-center mb-8">
          <img src={LoginLogo} alt="CapitaStar @work" className="h-15" />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.name && formik.errors.name ? "border-red-500" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-xs italic">
                {formik.errors.name}
              </p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                autoComplete="current-password"
              />
              {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-xs italic">
                {formik.errors.password}
              </p>
            ) : null}
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600"
                onClick={togglePasswordVisibility}
              >
                <svg className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2C5.58 2 1.73 4.11 0 7.5 1.73 10.89 5.58 13 10 13s8.27-2.11 10-5.5C18.27 4.11 14.42 2 10 2zm0 9a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zM10 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                </svg>
              </button>
            </div>
          </div>
          {invalidCredential && (
            <div className="mb-4 text-red-500 text-center">{invalidCredential}</div>
          )}
          <div className="flex items-center justify-center mb-4">
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
