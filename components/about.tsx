'use client'
import React, {useEffect, useState} from "react"

interface AboutItem {
    img: string;
    title: string;
    desc: string;
}

export default function About(){

    const [itemList, setItemList] = useState<AboutItem[]>([]);
    const [isActive, setIsActive] = useState(-1);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await fetch("/api/work?type=about");
                const data = await res.json();
                setItemList(data.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <ul className="flex flex-wrap w-full gap-[2%] lg:gap-[1.5%]">
                {itemList.map((e, i) => (
                    <li key={i} className={`aspect-square h-16 border border-gray-200 box-border mb-2.5 text-center flex flex-col justify-center items-center cursor-pointer ${isActive === i ? 'bg-gradient-to-t from-yellow-300 from-10% to-transparent to-40%' : ''}`} onMouseOver={()=>{setIsActive(i)}}>
                        <div className="w-8 h-8 bg-cover md:w-9 md:h-9 lg:w-10 lg:h-10" style={{ backgroundImage: `url(${e.img})`}}></div>
                        <span className="text-[10px]">{e.title}</span>
                    </li>
                ))}
            </ul>
            <div className="text-gray-400 h-40 my-4 md:h-10">
                <p className="text-lg mb-4">{isActive !== -1 && itemList[isActive].desc}</p>
            </div>
        </>
    )
}