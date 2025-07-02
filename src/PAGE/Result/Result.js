import React from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";       
import { Navigate, useNavigate } from "react-router-dom"; //  Updated from useHistory
import "./Result.css";

const Result = ({ name, score }) => {
  const Navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      Navigate("/");
    }
  }, [name, Navigate]);

   return (
    <div
      className="result"
      style={{
        backgroundImage: "url('/ques1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;