import React, { useState, useRef } from "react";
import classes from "./Login.module.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const emailInputRef = useRef<HTMLInputElement>();
  const passwordInputRef = useRef<HTMLInputElement>();
  const usernameRef = useRef<HTMLInputElement>();
  const profilePicRef = useRef<HTMLInputElement>();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;
    if (!isLogin) {
      const username = usernameRef.current!.value;
      const profilePic = profilePicRef.current!.value;
    } else {
    }
    navigate("/");
  };

  return (
    <section>
      <header className={classes.header}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.input}>
            <label htmlFor="email">Email</label>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              required
              color="info"
              inputRef={emailInputRef}
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="password">Password</label>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              required
              inputRef={passwordInputRef}
            />
          </div>
          {!isLogin && (
            <div className={classes.input}>
              <label htmlFor="username">Username</label>
              <TextField
                id="username"
                label="username"
                variant="outlined"
                required
                inputRef={usernameRef}
              />
            </div>
          )}
          {!isLogin && (
            <div className={classes.input}>
              <label htmlFor="prof_pic">Profile Pic</label>
              <TextField
                id="prof_pic"
                label="URL"
                variant="outlined"
                required
                inputRef={profilePicRef}
              />
            </div>
          )}
          <div className={classes.btns}>
            <button
              type="button"
              className={classes.btn}
              onClick={() => {
                setIsLogin((prev) => !prev);
              }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
            <button type="submit" className={classes.btn}>
              Submit
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Login;
