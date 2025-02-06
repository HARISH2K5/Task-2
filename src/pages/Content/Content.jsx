import React from 'react'
import { useNavigate } from 'react-router-dom'

function Content() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/")
    }

  return (
    <div>
        <p>Content</p>
        <button onClick={handleNavigate}>Go back to Home</button>
    </div>
  )
}

export default Content