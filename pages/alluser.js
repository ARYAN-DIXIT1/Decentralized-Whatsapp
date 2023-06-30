import React,{useState,useEffect,useContext} from 'react';
import {UserCard} from "../../Components/index";
import Style from '../styles/alluser.module.css';
import { ChatAppContext } from '@/Context/ChatAppContext';


const alluser = () => {
    const {userLists,addFriends} = useContext(ChatAppContext);
  return (
    <div className={Style.alluser_info}>
        <h1> Find Your Friends </h1>
        <div className={Style.alluser}>
        {
            userLists.map((eL,i)=>(
                <UserCard key={i+1} eL={eL} i={i} addFriends={addFriends}/>
            ))
        }
        </div>
    </div>
  )
}

export default alluser;