import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

function FriendsList(props) {

    const [friends, setFriends] = useState([]);

    useEffect(() =>{
        fetchFriends();
    },[])

    const fetchFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const goToAddFriend = (event) => {
        event.preventDefault();
        window.location.href =  '/addFriend';
        return (<AddFriend setFriends = {setFriends} />)
    }

    return (
        <div>
            <h1>Friends List</h1>
            <button onClick = {goToAddFriend}>Add Friend</button>
            {friends.map((friend)=>{
                return(<div key = {friend.id} className = 'friend'>
                    <h3>Name: {friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>)
            })}
            
        </div>
    )
}
export default FriendsList;