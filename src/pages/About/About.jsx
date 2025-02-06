import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        About page
      </div>
    </div>
  );
}

export default About;
