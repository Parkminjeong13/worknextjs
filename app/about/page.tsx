import AboutComponent from "@/components/about";

export default function About(){
    return (
        <>
            <div className="pl-0 w-4/5 box-border flex my-37 mx-auto justify-between flex-wrap md:pl-25 md:w-9/10">
                <div className="bg-center bg-no-repeat bg-contain basis-3/5 md:basis-7/10 md:my-8 md:mx-auto md:h-80 lg:basis-1/2" style={{backgroundImage:'url("./images/portrait.jpg")'}} />
                <div className="flex flex-col flex-wrap basis-full mx-auto text-center my-12 md:text-left lg:basis-1/2 lg:my-0">
                    <div className="mt-16 mb-5">
                        <h3 className="text-3xl mb-4">About</h3>
                        <p className="text-lg mb-4">&quot;언어를 사랑하는 개발자 박민정입니다.&quot;</p>
                    </div>
                    <AboutComponent />
                    <div>
                        <h3 className="text-3xl mb-4">Education</h3>
                        <p className="text-lg mb-4">2023.06.29~2023.11.30</p>
                        <p className="text-lg mb-4">(혼합+디지털컨버전스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A (900시간)</p>
                    </div>
                </div>
            </div>
        </>
    )
}