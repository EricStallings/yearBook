import React, {useEffect, useContext} from 'react';

// import UserContext from './userContext';


function Profile(props){
  // const user = useContext(UserContext);
  
  return (
    <div  className="page-container" id="profile-container">

      <div className="input-container" id="user-info" >

        <div id="profile-picture-container">
         <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/62609230_10106021161196746_792179122582323200_o.jpg?_nc_cat=111&_nc_oc=AQn2zsON75THjdJv-bbzOlaU0WYpArv4mj6Dgs9hQrdblR-ktUb1oPeFRA5DwqRF9Zg&_nc_ht=scontent-lax3-2.xx&oh=16a486989e9c74ea9228393f2d564036&oe=5E9EEF7A" alt="Avatar" class="avatar" />
        </div>

        <h1 className="profile-username-display">Eric Stallings</h1>

      </div>


    </div>
  )
}


export default Profile;