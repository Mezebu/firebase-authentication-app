import React, { useRef, useState } from "react";
// prettier-ignore
import {Card,CardContent,  Typography, TextField,Button,} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";

import useStyles from "./styles";
import { useAuth } from "../../contexts/AuthContext";

const SignUp = () => {
  const { signup } = useAuth();
  const classes = useStyles();
  const history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do no match");
    }

    try {
      setError("");
      setLoading(true);

      await signup(emailRef.current.value, passwordRef.current.value);

      history.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="elevation">
        <CardContent className={classes.left}>
          <div className={classes.leftContents}>
            <Typography
              variant="h4"
              style={{ fontWeight: 600, marginTop: 30 }}
              gutterBottom
            >
              Sign Up
            </Typography>
            <Typography color="textSecondary" variant="body1" gutterBottom>
              Don't have an account?
            </Typography>
            <div className={classes.headerSpacing} />
            {error && (
              <Alert severity="warning" className={classes.alert}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className={classes.formInputs}>
              <TextField
                type="text"
                inputRef={nameRef}
                label="Full Name"
                required
              />
              <TextField
                label="Your Email"
                type="email"
                inputRef={emailRef}
                required
              />
              <TextField
                label="Password"
                type="password"
                inputRef={passwordRef}
                required
              />
              <TextField
                label="Confirm Password"
                type="password"
                inputRef={confirmPasswordRef}
                required
              />

              <div className={classes.spacing} />

              <div className={classes.btn}>
                <Button
                  disabled={loading}
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Create account
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
        <CardContent className={classes.right}>
          Already have an account? <Link to="/">Log in</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
