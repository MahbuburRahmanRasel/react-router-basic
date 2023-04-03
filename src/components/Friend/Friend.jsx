import React from "react";
import "./Friend.css";
import { Link, useNavigate } from "react-router-dom";



const Friend = ({ friend }) => {
  
    const navigate = useNavigate();

  const handler = () => {
    navigate(`/friend/${friend.id}`);
  };

  return (
    <div className="friend">
      <h3>{friend.name}</h3>
      <p>{friend.id}</p>
      <p>{friend.address.city}</p>
      <button>
        <Link to={`/friend/${friend.id}`}>Detail</Link>
      </button>
      <button onClick={handler}> Details2 </button>
    </div>
  );
};

export default Friend;
