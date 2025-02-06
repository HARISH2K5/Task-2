import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbal.css";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
function Navbar() {
  const [count, setcount] = useState(0);

  return (
    <>
      <Box sx={{ background: "white" }}>
        <Container
          sx={{
            fontSize: "1.25rem",
            display: "flex",
            padding: "15px",
            gap: "5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SchoolIcon
            sx={{
              fontSize: "2.75rem",
              color: "#201c87",
              marginRight: "-80px ",
            }}
          />
          <div className="hi">
            <div
              style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}
            >
              <div
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Portfolio
              </div>
              <div style={{ fontSize: ".75rem", color: "gray" }}>Harish R.</div>
            </div>
          </div>
          {/* Apply sx={linkStyles} instead of style={} */}
          <Link className="nav-icons" to="/">
            Home
          </Link>
          <Link to="/about" className="nav-icons">
            About
          </Link>
          <Link to="/content" className="nav-icons">
            Content
          </Link>
          <Link to="/footer" className="nav-icons">
            Footer
          </Link>
          <button class="rounded-[170px] px-6 py-2 border-none bg-[#251474] text-white tracking-widest cursor-pointer hover:bg-[#1d0f5a] hover:scale-105 transition duration-300">
            LET'S TALK
          </button>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
