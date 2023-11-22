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
            <ul className="flex flex-wrap gap-[2%] lg:gap-1">
                {itemList.map((e, i) => (
                    <li key={i} className="aspect-square w-12 h-12 border border-gray-200 box-border mb-2 text-center flex flex-col justify-center items-center cursor-pointer md:w-16 md:h-16 lg:w-14 lg:h-14" onMouseOver={()=>{setIsActive(i)}}>
                        <div className="w-7 h-7 bg-cover bg-center bg-no-repeat md:w-9 md:h-9 lg:w-8 lg:h-8" style={{ backgroundImage: `url(${e.img})`}}></div>
                        <span className="text-[10px]">{e.title}</span>
                    </li>
                ))}
            </ul>
            <div className="text-gray-400 h-10 my-4">
                <p className="text-sm">{isActive !== -1 && itemList[isActive].desc}</p>
            </div>
        </>
    )
}