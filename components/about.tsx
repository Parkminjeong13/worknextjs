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
            <ul className="flex flex-wrap gap-1">
                {itemList.map((e, i) => (
                    <li key={i} className="w-14 border border-gray-300 box-border mb-2 cursor-pointer flex flex-col justify-center items-center" onClick={() => setIsActive(i)}>
                        <div className="w-8 h-8" style={{ backgroundImage: `url(${e.img})`, backgroundSize: 'cover' }}></div>
                        <span className="text-xs">{e.title}</span>
                    </li>
                ))}
            </ul>
            <div className="text-gray-400 h-10 mt-3 mb-3">
                <p>{isActive !== -1 && itemList[isActive].desc}</p>
            </div>
        </>
    )
}