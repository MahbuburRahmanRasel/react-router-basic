import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendsDetail = () => {
    const friend = useLoaderData();
   
    const navigate = useNavigate();

    const handlerGoback = ()=>{
        navigate(-1);

    }


    return (
        <div>
            <h3>{friend.name}</h3>
            <h3>{friend.username}</h3>
            <h4>{friend.email}</h4>
            <button onClick={handlerGoback}>Go back</button>
        </div>
    );
};

export default FriendsDetail;