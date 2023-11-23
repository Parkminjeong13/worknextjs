'use client'
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
    const countType = listType.map((type, i) => {
        let filtered;
        type === 'All' ? filtered = itemList : filtered = itemList.filter(e => e.type === type)
        return `${type} : ${filtered.length}`;
      });
    return (
        <>
            <div className="pl-0 w-4/5 mx-auto box-border md:pl-24  md:w-9/10 lg:my-48">
                <h3 className="text-4xl text-center pt-24 md:pt-12">Portfolio</h3>
                <div className="flex w-full justify-between items-center flex-wrap transform: -translate-x-[1000px] md:translate-x-0 md:my-12">
                    <div className="flex">
                        {listType.map((e, i) => {
                            return (
                                <div key={i} onClick={() => setSelected(e)} className={`border border-gray-200 p-2.5 cursor-pointer rounded text-center flex-shrink-0 text-sm mr-2.5 text-white  lg:text-base lg:mr-4 ${selected === e ? 'bg-red-500' : 'bg-gray-400'}`}>{countType[i]}</div>
                            )
                        })}
                    </div>
                    <div className="flex md:my-12">
                        <div title={"가로"} onClick={()=>{setIsVertical(false)}} className={`w-8 h-8 border flex justify-center items-center p-2.5 cursor-pointer bg-center bg-no-repeat shadow-[0_1px_5px_2px_gray-200] box-content ${!isVertical ? 'bg-gray-200' : 'bg-white'} lg:w-10 lg:h-10`} style={{backgroundImage:'url("/images/list.png")'}}></div>
                        <div title={"세로"} onClick={()=>{setIsVertical(true)}} className={`w-8 h-8 border flex justify-center items-center p-2.5 cursor-pointer bg-center bg-no-repeat shadow-[0_1px_5px_2px_gray-200] box-content ${isVertical ? 'bg-gray-200' : 'bg-white'} lg:w-10 lg:h-10`} style={{backgroundImage:'url("/images/vertical.png")'}}></div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {
                        FilterData.map((e, i) => {
                            return (
                                <div key={i} className={`flex flex-col border border-gray-300 text-center mb-12 box-border basis-full ${isVertical ? 'relative pb-12 md:flex-col  md:pb-12 md:basis-[48%] lg:basis-[32%]': 'md:flex-row md:basis-full'}`}>
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