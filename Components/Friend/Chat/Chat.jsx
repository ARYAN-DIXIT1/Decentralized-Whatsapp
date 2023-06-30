import React,{useEffect,useState} from "react";
import Style from "./Chat.module.css";
import {useRouter} from "next/router";
import images from "../../../assets";
import {converTime } from "../../../Utils";
import {Loader} from "../../index";


const Chat=({functionName,readMessage,friendMsg,account,userName,loading,currentUserName,currentUserAddress})=>{
    const [message,setMessage] =useState("");
    const [chatData,setChatData]=useState({
        name:"",
        address:"",
    });
    const router =useRouter()
    useEffect(()=>{
        if(!router.isReady) return 
        setChatData(router.query);
        readMessage(router.query.address);
    },[router.isReady]);

    // console.log(chatData.address,chatData.name);
    return (
        <div className={Style.Chat}>
            {currentUserName && currentUserAddress ?(
                <div className={Style.Chat_user_info}>
                    <Image src={images.accountName} alt="image" width={70} height={70}/>
                    <div className={Style.Chat_user_info_box}>
                        <h4>{currentUserName}</h4>
                        <p className={Style.show}>{currentUserAddress}</p>
                    </div>
                </div>
            ): (
                ""
            )}




            <div className={Style.Chat_box_box}>
                <div className={Style.Chat_box}>
                    <div className={Style.Chat_box_left}>
                        {
                            friendMsg.map((eL,i)=>(
                                <div>
                                    {eL.sender==chatData.address ? (
                                        <div className={Style.Chat_box_left_title}>
                                            <Image src={images.accountName} alt="image" height={70} width={70}/>
                                            <span>
                                                {chatData.name}{""}
                                                <small>Time: {converTime(eL.timestamp)}</small>
                                            </span>
                                        </div>
                                    ): (
                                       
                                            <div className={Style.Chat_box_left_title}>
                                                <Image src={images.accountName} alt="image" height={70} width={70}/>
                                                <span>
                                                    {userName}{""}
                                                    <small>Time:{converTime(eL.timestamp)}</small>
                                                </span>
                                            </div>
                                    )}
                                    <p key={i+1}> {eL.msg} {""} {""}</p>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
                {
                    currentUserName && currentUserAddress? (
                        <div className={Style.Chat_box_send}>
                            <div className={Style.Chat_box_send_img}>
                                <Image src={images.smile} alt="smile" width={50} height={50}/>
                                <input type="text" placeholder="Type Your Message" onChange={(e)=>setMessage(e.target.value)} />
                                <Image src={images.file} alt="file" width={50} height={50}/>
                                {
                                    Loading==true?(
                                        <Loader/>
                                    ):(
                                        <Image src={images.send} alt="file" width={50} height={50} onClick={()=>functionName({msg:message,address:chatData})}/>
                                    )
                                }
                            </div>
                        </div>
                    ):""
                }
            </div>
        </div>
    );
};
export default Chat;