import React from 'react';
import beach1 from '../Asset/beach1.webp';
import beach2 from '../Asset/beach2.webp';
import beach3 from '../Asset/beach3.webp';
import paradise1 from '../Asset/paradise1.webp';
import paradise2 from '../Asset/paradise2.webp';


const Destination = () =>{
    return(
        <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
            <h1>All-Inclusive Resorts</h1>
            <p>On The Carribean's Best  Beaches</p>
            <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2  md:gap-4">
                <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"  src={beach1} alt="the  beach1"/>
                <img className="w-full h-full object-cover" src={beach2} alt="the  beach2"/>
                <img  className="w-full h-full object-cover" src={beach3}  alt="the beach3"/>
                <img className="w-full h-full object-cover"  src={paradise1} alt="the paradise1"/>
                <img  className="w-full h-full object-cover" src={paradise2}  alt="the  paradise2"/>
            </div>

        </div>
    )
}

export default Destination