import HomeComponent from '@/components/home'

export default function Home(){
    return (
        <>
            <div className="pl-0 box-border w-4/5 mx-auto my-40 md:w-9/10 md:pl-25">
                <div className="flex mx-auto w-9/10 md:w-3/4">
                    <span className="text-base w-1/5 text-right border-b-2 border-red-500 ml-auto md:text-xl md:w-2/12 lg:w-1/10 lg:text-2xl">ㅁㅈ</span>
                </div>
                <div className={`grid grid-cols-10 gap-y-2.5 mx-auto mt-5 mb-20 overflow-hidden text-center bg-white border-red-500 border-2 py-[1.5%] shadow-[sm shadow-red-500] md:w-4/5 md:grid-cols-15 lg:w-3/4 lg:grid-cols-20`}>
                    <HomeComponent />
                </div>
            </div>
        </>
    )
}