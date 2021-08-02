import React, { useRef, useState } from "react";
// prettier-ignore
import { Card, CardContent, Typography, TextField, Button, FormControl,} from "@material-ui/core";

import useStyles from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

const ResetPassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);

      await resetPassword(emailRef.current.value);
      setMessage("Check your email for details");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  const handlePushToSignIn = () => {
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="elevation">
        <CardContent className={classes.left}>
          <div className={classes.leftContents}>
            <Typography variant="h4" style={{ fontWeight: 600 }} gutterBottom>
              Reset Password
            </Typography>
            <Typography color="textSecondary" variant="body1" gutterBottom>
              Enter the email address associated with your <br /> account.
            </Typography>
            <div className={classes.headerSpacing} />
            {error && (
              <Alert className={classes.alert} severity="warning">
                {error}
              </Alert>
            )}

            {message && (
              <Alert className={classes.alert} severity="success">
                {message}
              </Alert>
            )}

            <FormControl action="" className={classes.formInputs}>
              {/* prettier-ignore */ }
              <TextField label="Your Email" type="email" inputRef={emailRef} required/>

              <div className={classes.spacing} />

              <div className={classes.submitBtn}>
                {/* prettier-ignore */ }
                <Button variant="contained" type='submit' size="large" disabled={loading} onClick={handleReset}>
                  Reset Password
                </Button>
              </div>
              <div className={classes.spacing} />
              <div className={classes.signInbtn}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handlePushToSignIn}
                >
                  <Typography color="primary">Sign In </Typography>
                </Button>
              </div>
            </FormControl>
          </div>
        </CardContent>
        <CardContent className={classes.right}>
          hello dkbkdhhd s hohadh apdpa pdhadh lhldhsdhls ldh slh ldh dlh ldsh
          dlhj
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
