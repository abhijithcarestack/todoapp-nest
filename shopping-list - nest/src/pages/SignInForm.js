import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../Utils/authenticator";
import showErrorToast from "../Utils/showErrorToast";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { usePostData } from "../Utils/apiService";

export default function SignIn() {
  const navigate = useNavigate();
  const { postData } = usePostData("auth");
  const [errorTexts, setErrorTexts] = React.useState({
    usernameError: null,
    passwordError: null,
  });

  //this validation logic is made for mui textfield validation
  const validate = (username, password) => {
    if (username === "") {
      setErrorTexts((errorTexts) => {
        errorTexts.usernameError = "Username cannot be empty";
        return { ...errorTexts };
      });
      return false;
    } else {
      setErrorTexts((errorTexts) => {
        errorTexts.usernameError = null;
        return { ...errorTexts };
      });
    }

    if (password === "") {
      setErrorTexts((errorTexts) => {
        errorTexts.passwordError = "Password cannot be empty";
        return { ...errorTexts };
      });
      return false;
    } else {
      setErrorTexts((errorTexts) => {
        errorTexts.passwordError = null;
        return { ...errorTexts };
      });
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let password = data.get("password");
    if (validate(email, password)) {
      postData({ email, password })
        .then((response) => {
          localStorage.setItem("userId", JSON.stringify(response));
          setTimeout(() => navigate("/shoppinglist"), 50);
        })
        .catch((error) => {
          showErrorToast(error);
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            error={!!errorTexts.usernameError}
            label="email"
            helperText={errorTexts.usernameError}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            error={!!errorTexts.passwordError}
            helperText={errorTexts.passwordError}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Dont have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
