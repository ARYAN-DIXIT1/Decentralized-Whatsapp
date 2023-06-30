import React,{useEffect,useState,useContext} from 'react';
import Image from "next/image";
import Link from "next/link";
import Style from './NavBar.module.css';

import { ChatAppContext } from '@/Context/ChatAppContext';
import {Model,Error} from "../index";
import images from "../../assets";

const NavBar = () => {
  class menuItems = [
    {
      menu:"All Users",
      link:"alluser", 
    },
    {
      menu:"CHAT",
      link:"/",
    },
    {
      menu:"CONTACT",
      link:"/",
    },
    {
      menu:"SETTING",
      link:"/",
    },
    {
      menu:"FAQS",
      link:"/",
    },
    {
      menu:"TERMS OF USE",
      link:"/",
    },
  ];

  const [active,setActive]=useState(2);
  const [open,setOpen]=useState(false);
  const [openModel,setOpenModel]=useState(false);

  const {account,userName,connectWallet,createAccount,error}=useContext(ChatAppContext);
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
        <Image src={images.logo} alt="logo" width={50} height={50}/>

        </div>
        <div className={Style.NavBar_box_right}>

          <div className={Style.NavBar_box_right_menu}>
            {menuItems.map((eL,i)=>(
              <div onClick={()=>setActive(i+1)} key={i+1} className={`${Style.NavBar_box_right_menu_items} ${active==i+1 ? Style.active_btn:"" }`}>
                <Link className={Style.NavBar_box_right_menu_items_link}
                 href={eL.link}>
                  {eL.menu}
                 </Link>
              </div>

            ))}
          </div>

        

        {open && (
          <div className={Style.mobile_menu}>
          {menuItems.map((eL,i)=>(
            <div onClick={()=>setActive(i+1)} key={i+1} className={`${Style.mobile_menu_items} ${active==i+1 ? Style.active_btn:"" }`}>
              <Link className={Style.mobile_menu_items_link}
               href={eL.link}>
                {eL.menu}
               </Link>
            </div>

          ))}

          <p className={Style.mobile_menu_btn}>
            <Image src={images.close} alt="close" width={50} height={50} onClick={()=> setOpen(false)}/>
          </p>
        </div>
        )}
        <div className={Style.NavBar_box_right_connect}>
          {account ==""?(
            <button onClick={()=>connectWallet()}>
              {""}
              <span>Connect Wallet</span>
            </button>
          ): (
            <button onClick={()=>setOpenModel(true)}>
              {""}
              <Image src={userName ? images.accountName: images.create2}
               alt="Account image"
               width={20}
               height={20}/>
               {''}
               <small>
                {userName || "Create Account"}
               </small>

            </button>
          )}
        </div>

        <div className={Style.NavBar_box_right_open} onClick={()=>setOpen(true)}>
          <Image  src={images.open} alt="open" width={30} height={30}/>
        </div>
      </div>
      </div>


      {openModel && (
        <div className={Style.modelBox}>
          <Model openBox={setOpenModel}
          title="WELCOME TO"
          head="CHAT BUDDY"
          info="p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque! Dicta distinctio sit, veritatis harum nesciunt quaerat nulla commodi magni quos numquam modi excepturi eum expedita asperiores, error, laboriosam provident reiciendis temporibus ab? Pariatur dolorem doloremque assumenda explicabo cum dolores at similique quasi, inventore deserunt reiciendis iusto! Minus, voluptatibus nostrum!</p>"
          smaLLInfo="Kindly Select Your name..."
          image={images.hero}
          functionName={createAccount}
          address={account}
          />
        </div>
      )}
      {error ==""?"" :<Error error={error}/>}
    </div>
    
  )
}

export default NavBar;