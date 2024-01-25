import React,{useState} from 'react';
import {BsArrowLeftSquareFill,BsArrowRightSquareFill} from 'react-icons/bs';


const slideObject =[
    {
        url:'https://media.istockphoto.com/id/1126867157/photo/palm-beach-and-white-sand.jpg?s=612x612&w=0&k=20&c=D_D1_pZIZJpZPh9JKkrfR--O8UWzjy_CbyjyZJVr5ps='
    },
    {
        url:'https://media.istockphoto.com/id/1442179368/photo/maldives-island.webp?b=1&s=170667a&w=0&k=20&c=i8wK-BoIq_B365rf0oMRBNmuMc4U1zlTUllMuyr_QNw='
    },
    {
        url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        url:'https://images.unsplash.com/photo-1520483725102-a4daafec9a73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyb3BpY2FsJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
        url:'https://media.istockphoto.com/id/1462440527/photo/young-boys-playing-with-waves.webp?b=1&s=170667a&w=0&k=20&c=cMnBuhMoxqrdqvwxu-GuBcf4cPZbNq0Oozb6Qd1Ozvs='
    },
    {
        url:'https://images.unsplash.com/photo-1546536582-cdabb1daf509?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyb3BpY2FsJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D'
    }
       

]



const Carosel = () =>{
    const[slide,setSlide] = useState(0);
    const length = slideObject.length
    const leftClick =()=>{
        slide>0 && setSlide(slide-1);
    }
    const rightClick = ()=>{
        (slide<length-1) && setSlide(slide+1);
    }

    return (
        <div className= "max-w-[1240px] mx-auto px-4 py-16 relative  flex justify-center items-center">
           <BsArrowLeftSquareFill onClick={leftClick} className="absolute top-[50%] text-4xl text-blue-500 cursor-pointer left-40"/>
           <BsArrowRightSquareFill onClick={rightClick} className="absolute top-50%[ text-4xl text-blue-500 cursor-pointer right-40"/> 
          {slideObject.map((item,index)=>(
          <div className={index===slide?'opacity-100':'opacity-0'}>
            { index===slide && (<img className=" w-[800px] h-[600px] rounded-md "  src={item.url} alt='/'/>)}
            
          </div>  
          
            ))}
        </div>
    )
};

export default Carosel