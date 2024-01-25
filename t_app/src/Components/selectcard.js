import React from "react";


const SelectCard = (props) => {
    return(
        <div>
              <div className="relative">
                <img src={props.bg} alt="beach " className=" object-cover w-full h-[275px] "/>
                <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                    <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">{props.text}</p>
                </div>

            </div>
        </div>
    )

};

export default SelectCard