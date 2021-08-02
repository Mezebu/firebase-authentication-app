import React, { useState } from "react";
// prettier-ignore
import { AppBar, Toolbar, Typography, Button, Container } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { useAuth } from "../../contexts/AuthContext";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  const classes = useStyles();
  const { currentUser, logout } = useAuth();

  const [error, setError] = useState("");

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        {error && <Alert severity="warning">{error}</Alert>}
        <h1>Dashboard</h1>
        <div>
          <strong>Email:</strong> {currentUser.email} <br />
          <strong>Name:</strong> {currentUser.displayName}
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
