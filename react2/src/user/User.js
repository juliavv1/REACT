import {useState} from "react";
import {getPostsComments, getPostsId} from "../services/API";
import UserDetails from "../UserDetails/UserDetails";

export default function User({item}) {

    let [userDetails, setUserDetails] = useState([])

    function selectUser() {
        getPostsId(item.id).then(value => setUserDetails(value.data))
    }

    return (
        <div>
            {item.id} -{item.title}
            <button onClick={selectUser}>click me
            </button>


                <UserDetails userDetails={userDetails}/>

        </div>


    );
}