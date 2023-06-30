import React, { useContext } from 'react';
import Image from "next/image";
import Style from './Friend.module.css';
import images from '../../assets';
import Chat from './Chat/Chat';
import Card from './Card/Card';

import { ChatAppContext } from '@/Context/ChatAppContext';

const Friend = () => {
    // const array=[1,2,3,4,5,6];
    const {sendMessage,account,friendLists,readMessage,userName,loading,currentUserName,currentUserAddress,readUser} =useContext(ChatAppContext);
    console.log(friendLists);
  return (
    <div className={Style.Friend}>
        <div className={Style.Friend_box}>
            <div className={Style.Friend_box_left}>
                {
                    friendLists.map((eL,i)=>(
                        <Card key={i+1}
                        eL={el} i={i}
                        readMessage={readMessage}
                        readUser={readUser}
                        />
                    ))
                }
            </div>
            <div className={Style.Friend_box_right}>
                <Chat functionName={sendMessage}
                readMessage={readMessage} friendMsg={friendMsg} account={account} userName={userName} loading={loading} currentUserName={currentUserName} currentUserAddress={currentUserAddress} readUser={readUser}/>
            </div>
        </div>
    </div>
  )
}

export default Friend