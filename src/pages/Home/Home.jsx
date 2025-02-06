import React from 'react'
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Bg from "D:/react learn/react/src/assets/images/bg.png";



function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <img src={Bg} style={{width: "100%", height: "100vh", objectFit: "cover"}}/>
    </div>
  )
}

export default Home