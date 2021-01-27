import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const intitialInfo = {
    id: '',
    name: '',
    age: '',
    email: '',
    
}

function AddFriend(props){

    const [friendInfo, setfriendInfo] = useState(intitialInfo);

    const handleChange = event => {
        setfriendInfo({
            ...friendInfo,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
          .post('/friends', friendInfo)
          .then(res => {
              props.setFriends(res.data)
              console.log(res);
          })
          .catch(err => {
              console.log(err);
          })

        setfriendInfo(intitialInfo);
    }

    const goToFriendsList = (event) => {
        event.preventDefault();
        window.location.href = '/friends';
    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label>Name:</label>
                <input
                    type = 'text'
                    name = 'name'
                    value = {friendInfo.name}
                    onChange = {handleChange}
                />
                 <label>Age:</label>
                <input
                    type = 'text'
                    name = 'age'
                    value = {friendInfo.age}
                    onChange = {handleChange}
                />
                 <label>Email:</label>
                <input
                    type = 'email'
                    name = 'email'
                    value = {friendInfo.email}
                    onChange = {handleChange}
                />
             
                <button onClick = {goToFriendsList}>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;