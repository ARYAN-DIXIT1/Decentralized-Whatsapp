import React,{useEffect} from 'react';
import Image from ".next/image";
import Link from "next/link";
import Style from './Card.module.css';
import images from "../../../assets";


const Card = ({readMessage,eL,i,readUser}) => {
  return (
    <Link href={{pathname: "/",query:{name:`${eL.name}`,address:`${eL.pubkeys}`}}}>
    <div className={Style.Card} onclick={()=>(readMessage(eL.pubkeys),readUser(eL.pubkeys))}>
        <div className={Style.Card_box}>
            <div className={Style.Card_box_left}>
                <Image src={images.accountName} alt="userName" width={50} height={50} className={Style.Card_box_left_img}/>
            </div>
            <div className={Style.Card_box_right}>
                <div className={Style.Card_box_right_middle}>
                    <h4>{eL.name}</h4>
                    <small>{eL.pubkeys.slice(21)}..</small>
                </div>
                <div className={Style.Card_box_right_end}>
                    <small>{i+1}</small>
                </div>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Card