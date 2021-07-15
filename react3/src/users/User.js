import UserDetails from "../UserDetails/UserDetails";
import {getUsersId} from "../service";
import {useState} from "react";

export default function User({item}) {
    let [userDetails, setUserDetails] = useState([])

    function selectUser() {
        getUsersId(item.id).then(value => setUserDetails(value.data))
    }
    return(
        <div>
            {item.name}
       <button  onClick={selectUser}>click me
           </button>
            <UserDetails userDetails={userDetails}/>
       </div>
    )
}