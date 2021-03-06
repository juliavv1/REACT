import {useEffect, useState} from "react";
import {getUsers} from "../service";
import User from "./User";

export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers().then(response =>{
            setUsers(response.data);
        })
    },[]);

    return(
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>

    );
}