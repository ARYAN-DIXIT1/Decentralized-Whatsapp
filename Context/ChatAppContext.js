import React, {useState,useEffect} from 'react';
import {useRouter} from "next/router";
import { checkIfWalletConnected,connectWallet,connectingWithContract } from '@/Utils/apiFeature';

export const ChatAppContext=React.createContext();

export const ChatAppProvider=({children})=>{
    const [account,setAccount]=useState("");
    const [userName,SetUserName]=useState("");
    const [friendMsg,setfriendMsg]=useState([]);
    const [friendLists,setFriendLists]=useState([]);
    const [loading,setLoading]=useState(false);
    const [userLists,setUserLists]=useState([]);
    const [error,setError]=useState("");

    const [currentUserName,setCurrentUserName]=useState("");
    const [currentUserAddress,setCurrentUserAddress]=useState("");

    const router =useRouter();
    const fetchData=async()=>{
        try{
            const contract=await connectingWithContract();
            const connectAccount=await connectWallet();
            setAccount(connectAccount);

            const userName=await contract.getUsername(connectAccount);
            SetUserName(userName);


            const friendLists=await contract.getMyFriendList();
            setFriendLists(friendLists);

            const userLists=await contract.getAllAppUser();
            setUserLists(userLists);


        }catch(error){
            //setError("Please Install and Connect your wallet");
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchData();
    },[]);


    const readMessage=async (friendAddress)=>{
        try{
            const contract=await connectingWithContract();
            const read=await contract.readMessage(friendAddress);
        }
        catch(error){
            setError("Currently You Have no Message");
        }
    }

    const createAccount=async ({name,accountAddress})=>{
        try{
            // if(name || accountAddress){
            //     return setError("Name and AccountAddress,cannot be empty");

                const contract=await connectingWithContract();
                const getCreatedUser=await contract.createAccount(name);
                setLoading(true);
                await getCreatedUser.wait();
                setLoading(false);
                window.location.reload();
            }
        
            catch(error){
                setError("Error while connecting yoi=ur account please reload your browser");
            }
        
    };

    const addFriends =async({name,accountAddress})=>{
        try{
            // if(name || accountAddress){return setError("please provide a correct address");
            const contract=await connectingWithContract();
            const addMyFriend=await contract.addFriend(accountAddress,name);
            setLoading(true);
            await addMyFriend.wait()
            setLoading(false);
            router.push('/')
            window.location.reload();}

        
        catch(error){
            setError("Something went worng while adding your friend, Please Try Again");
        }
    };

    const sendMessage=async ({msg,address})=>{
        try{
            // if(msg || address){return setError("Please tag your Friend");
            const contract=await connectingWithContract();
            const addMessage=await contract.sendMessage(address,msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            window.location.reload();
        }
        catch(error){
            setError("Please reload and try again");
        }
    };

    const readUser=async(userAddress)=>{
        const contract=await connectingWithContract();
        const userName=await contract.getUsername(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    };


    return(
        <ChatAppContext.Provider value={{readMessage,createAccount,addFriends,sendMessage,readUser,connectWallet,checkIfWalletConnected,account,userName,friendLists,friendMsg,loading,userLists,error,currentUserAddress,currentUserName}}>
            {children}

        </ChatAppContext.Provider>
    )
};

