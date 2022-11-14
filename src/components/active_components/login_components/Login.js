import { useState } from "react";
import { Link } from "react-router-dom";

import firebaseApp from "../../../firebase/firebase";
import { getFirestore, doc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

const Login = () => {

  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password);
  }
  return (
    <div className="login-cont">
      <form className="form-login" onSubmit={handleSubmit}>
        <label className="inp-cn-text">
          E-mail:
          <input
            className="inp-txt"
            type="text"
            placeholder="roberto@matchmaker.com"
            id="email"

          />
        </label>
        <label className="inp-cn-text">
          Password:
          <input
            className="inp-txt"
            type="password"
            placeholder="*********"
            id="password"
          />
        </label>
        <div>
          <input className="subm-btn" type="submit" value="log in" />

        </div>
      </form>
    </div>
  )
}

export default Login;