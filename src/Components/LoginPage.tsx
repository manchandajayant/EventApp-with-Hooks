import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Actions/userActions";
import { Redirect, Link } from "react-router-dom";
import { UserObject } from "./interfaces";
import { Typography } from "@material-ui/core";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const user: UserObject = useSelector((state: any) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { password, email };
  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(login(data));
  };

  if (user.auth) {
    return <Redirect to="/events"></Redirect>;
  } else {
    return (
      <div>
        Email
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        Password
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={onSubmit}>Login</button>
        <div>
          <Link to="/signup">
            <Typography>Dont have an Account? Sign Up</Typography>
          </Link>
        </div>
      </div>
    );
  }
};

export default LoginPage;
