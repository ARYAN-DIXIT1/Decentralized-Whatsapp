import React from 'react'

import Style from './Loader.module.css';
import Image from 'next/image';
import images from '@/assets';

const Loader = () => {
  return (
    <div classname={Style.Loader}>
        <div classname={Style.Loader_box}>
            <Image src={images.loader} alt="loader" width={100} height={100}/>
        </div>
    </div>
  );
};

export default Loader;