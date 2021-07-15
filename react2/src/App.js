import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import {useEffect, useState} from "react";
import {getUsers, getPosts, getPostsId} from "./services/API";
import Posts from "./users/Posts";
import UserDetails from "./UserDetails/UserDetails";


export default function App() {


    return (
        <div>

            <Posts/>

        </ div>
    );
}