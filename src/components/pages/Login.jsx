import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import auth from "../../services/authServices";

import LoginLogo from "../../assets/login_logo.png";

export default function Login({ setIsAuthenticated }) {
  const [invalidCredential, setInvalidCredential] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
    onSubmit: async (values) => {
      try {
        const user = {
          securityName: values.name,
          password: values.password,
        };
        const { data } = await auth.login(user);
        if (data.isValid && !data.errorMsg) {
          setIsAuthenticated(true);
          navigate("/");
        } else {
          setInvalidCredential("Invalid Credential");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-image bg-cover bg-center">
      <div className="max-w-md w-full rounded-lg p-8">
        <div className="flex justify-center mb-8">
          <img src={LoginLogo} alt="CapitaStar @work" className="h-15" />
        </div>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="Name"
            label="Name"
            name="name"
            autoComplete="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            autoFocus
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {invalidCredential && (
            <Alert severity="error">{invalidCredential}</Alert>
          )}

          <div className="flex items-center justify-center mb-4">
            <Link
              to="/"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
}
