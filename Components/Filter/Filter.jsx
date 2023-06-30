import React,{useState,useEffect, useContext} from "react";
import Image from "next/image";
import Style from './Filter.module.css';
import images from '../../assets';
import { ChatAppContext } from "@/Context/ChatAppContext";
import {Model} from '../index';
const Filter=()=>{
    const {account,addFriends}=useContext(ChatAppContext);
    // const {}=useContext(ChatAppContext);
    const [addFriend,setAddFriend]=useState(false);
 return (
    <div className={Style.Filter}>
        <div className={Style.Filter_box}>
            <div className={Style.Filter_box_left}>
                <div className={Style.Filter_box_left_search}>
                    <Image src={images.search} alt="image" width={20} height={20}/>
                    <input type="text" placeholder="search.."/>
                </div>
            </div>
            <div className={Style.Filter_box_right}>
                <button> <Image src={images.clear} alt="clear" width={20} height={20}/>
                Clear Chat</button>
                <button onClick={()=>setAddFriend(true)}> <Image src={images.user} alt="username" width={20} height={20}/>
                Add Friend</button>
            </div>
        </div>

        {addFriend && (
            <div className={Style.Filter_model}>
                <Model openBox={setAddFriend} title="Welcome To" head="Chat Buddy" info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt blanditiis distinctio laboriosam in, harum non amet, quia ex fuga quaerat possimus eius tenetur explicabo necessitatibus illo, omnis autem maiores provident! Similique sunt culpa illo maiores, ullam voluptatibus, eum nulla voluptates modi asperiores atque. Eius fugit minima laborum esse distinctio consequatur?
" smaLLInfo="Kindly Select your Friend name and address" image={images.hero} functionName={addFriend}/>
            </div>
        )}
    </div>
    
 );
};
export default Filter;