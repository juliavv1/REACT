    import {useEffect,useState} from "react";
import {getComments} from "../service";
import Comment from "./Comment";

export default function Comments() {
    let [comments,setComments] = useState([]);
    useEffect( ()=>{
        getComments().then(value => setComments(value.data))
    },[])
    return(
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}
        </div>
        )}