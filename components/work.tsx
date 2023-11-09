'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface workItem {
    img: string;
    title: string;
    desc: string;
    skill: string;
    contribution: string;
    period: string;
    view: string;
    git: string;
    type: string;
}
export default function Work(){

    const [isVertical, setIsVertical] = useState<boolean>(true);
    const [selected, setSelected] = useState<string>('All');
    const [itemList, setItemList] = useState<workItem[]>([]);

    const listType = ["All", "TeamProject", "Clone", "Webapp"]    

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await fetch("/api/work?type=work");
                const data = await res.json();
                setItemList(data.dataWork);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const FilterData = itemList && itemList.filter(e => {
        return selected === "All" || selected === e.type
    })
    return (
        <>
            <div className="pl-0 w-4/5 mx-auto my-12 md:pl-24 md:w-9/10 lg:w-9/10 box-border">
                <div className="flex w-full justify-between items-center my-12">
                    <div className="hidden md:flex justify-between gap-3">
                        {listType.map((e, i) => {
                            return (
                                <div key={i} onClick={() => setSelected(e)} className={`border border-gray-300 p-2 rounded-md cursor-pointer ${selected === e ? 'bg-gray-200' : ''}`}>{e}</div>
                            )
                        })}
                    </div>
                    <div className={`my-12 hidden md:flex`}>
                        <div title={"가로"} onClick={()=>{setIsVertical(false)}} className={`w-8 h-8 border border-black flex items-center justify-center p-6 cursor-pointer bg-center bg-no-repeat bg-[url('/images/list.png')] ${!isVertical ? 'bg-gray-200' : 'bg-white'}`}>
                        </div>
                        <div title={"세로"} onClick={()=>{setIsVertical(true)}} className={`w-8 h-8 border border-black flex items-center justify-center p-6 cursor-pointer bg-center bg-no-repeat bg-[url('/images/vertical.png')] ${isVertical ? 'bg-gray-200' : 'bg-white'}`}>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {
                        FilterData.map((e, i) => {
                            return (
                                <div key={i} className={`flex border border-gray-300 text-center mb-12 box-border basis-full flex-col ${isVertical ? 'relative pb-12 md:flex-col  md:pb-12 md:basis-[48%] lg:basis-[32%]': 'md:flex-row md:basis-full'}`}>
                                    <div className={`w-full order-1 aspect-[3/2] bg-cover bg-center bg-no-repeat cursor-pointer ${isVertical ? 'md:w-full': 'md:w-2/5'} md:order-${isVertical ? '1' : i % 2 === 0 ? '2' : '1'}`} style={{ backgroundImage: `url(${e.img})`}} />
                                    <div className={`p-7 w-4/5 order-2 mx-auto ${isVertical ? 'md:p-8 lg:order-2': 'relative md:p-6 lg:w-[45%] lg:px-17 lg:py-12'} md:order-${isVertical ? '2' : i % 2 === 0 ? '1' : '2'} lg:p-8`}>
                                        <h3 className="mb-8">{e.title}</h3>
                                        <p>{e.desc}</p>
                                        <p className="mt-4"><span className="font-bold">소요기간 : </span>{e.period}</p>
                                        <p className="mt-4"><span className="font-bold">기여도 : </span>{e.contribution}</p>
                                        <p className="mt-4"><span className="font-bold">스킬 : </span>{e.skill}</p>
                                        <div className={`flex justify-center bottom-0 ${isVertical ? 'absolute left-1/2 -translate-x-1/2': ''}`}>
                                            <a href={e.view} target="_blank" rel="noopener noreferrer" className="mx-5 my-2 p-2 bg-gray-200 rounded hover:bg-gray-300">View</a>
                                            <a href={e.git} target="_blank" rel="noopener noreferrer" className="mx-5 my-2 p-2 bg-gray-200 rounded hover:bg-gray-300">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}