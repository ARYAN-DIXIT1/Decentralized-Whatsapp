import React,{useEffect,useState,useContext} from 'react'


// import { ChatAppContext } from '@/Context/ChatAppContext';
import { Filter,Friend} from "../../Components/index";

const ChatApp = () => {
  // const {}=useContext(ChatAppContext);
  return (
    <div>
      <Filter/>
      <Friend/>
    </div>
  )
}

export default ChatApp;