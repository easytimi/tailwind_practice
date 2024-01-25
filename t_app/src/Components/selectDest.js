import React from "react";
import beachL1 from "../Asset/beachL1.webp";
import beachL2 from "../Asset/beachL2.webp";
import beachL3 from "../Asset/beachL3.webp";
import paradiseL1 from "../Asset/paradiseL1.webp";
import paradiseL2 from "../Asset/paradiseL2.jpg";
import paradiseL3 from "../Asset/paradiseL3.webp";
import SelectCard from "./selectcard";


const Selects = () => {
    return(
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectCard bg={beachL3} text="MALDIVES"/>
            <SelectCard bg={beachL1} text="BORA BORA"/>
            <SelectCard bg={beachL2} text="CONZUMEL"/>
            <SelectCard bg={paradiseL1} text="JAMAICA"/>
            <SelectCard bg={paradiseL2} text="KEY WEST"/>
            <SelectCard bg={paradiseL3} text="ANTIGUA"/>
           

        </div>
    )
}
export default Selects