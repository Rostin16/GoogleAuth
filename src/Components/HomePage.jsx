
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigator("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-5 shadow-lg rounded" style={{ maxWidth: "500px", width: "100%" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-4">Welcome to the Home Page</h2>
          <p className="card-text mb-4">You are now logged in. Feel free to explore!</p>
          <button onClick={handleSignout} className="btn btn-danger btn-lg w-100">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
