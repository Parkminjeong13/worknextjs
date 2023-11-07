'use client'
import React, { useEffect, useRef, useState } from "react";
interface NavItem{
    title: string;
}

export default function Nav(){
    const [isActive, setIsActive] = useState(-1);
    const [menuList, setMenuList] = useState<NavItem[]>([]);
    const navRefs = useRef({
        About: React.createRef(),
        Portfolio: React.createRef(),
        Contact: React.createRef()
    }).current;
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await fetch("/api/work?type=nav");
                const data = await res.json();
                setMenuList(data.dataNav);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return (
        <div className="w-10 h-screen bg-gray-700 fixed z-50 top-0 hidden md:flex">
            <ul>
                {
                    menuList.map((e,i)=>{
                        return (
                            <li key={i} 
                                className={`w-24 h-12 p-2 mt-5 border-double rounded-5 cursor-pointer box-border bg-white ${isActive === i ? 'border-white' : 'border-red-500'}`} 
                                onClick={()=>{setIsActive(i); navRefs[e.title].current.scrollIntoView({ behavior: 'smooth' }); }}>
                                <p className="inline-block">{e.title}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}