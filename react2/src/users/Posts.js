import User from '../user/User'
import {useEffect, useState} from "react";
import {getPosts, getPostsId} from "../services/API";
export default function Posts({items,selectUser} ) {
    let [users, setUsers] = useState([]);

    useEffect(() =>{
        getPosts().then(response =>{
            setUsers(response.data);
        })
    },[]);



    return(
        <div>
            {users.map(value=> <User key={value.id} item ={value} />)}
        </div>
    );
}