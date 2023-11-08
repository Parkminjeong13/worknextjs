'use client'
import React, { useEffect, useRef, useState } from "react";
interface NavItem{
    title: string;
}

export default function Nav(){
    const [isActive, setIsActive] = useState<number>(-1);
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
        <div className="w-10 h-full bg-gray-700 fixed z-50 top-0 hidden md:flex">
            <ul>
                {
                    menuList.map((e,i)=>{
                        return (
                            <li key={i} 
                                className={`w-25 h-12.5 p-0.5 mt-5 border-2 rounded-md cursor-pointer box-border bg-white ${isActive === i ? 'border-white' : 'border-red-500'}`} 
                                onClick={()=>{setIsActive(i); 
                                // navRefs[e.title].current.scrollIntoView({ behavior:'smooth'}); 
                                }}>
                                <div className={`border border-red-500 p-2 ${isActive === i ? 'border-white' : ''}`}>
                                    <p className={`inline-block  ${isActive === i ? 'bg-gradient-to-t-40' : 'bg-white'}`}>{e.title}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}