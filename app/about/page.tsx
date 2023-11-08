import AboutComponent from "@/components/about";

export default function About(){
    return (
        <>
            <div className="pl-24 box-border flex w-9/10 m-auto justify-between flex-wrap mt-36">
                <div className="bg-center bg-no-repeat bg-contain w-1/2 flex-grow" style={{backgroundImage:'url("./images/sketch.png")'}} />
                <div className="flex flex-col w-1/2 m-auto">
                    <div className="mt-16 mb-4">
                        <h3 className="text-2xl mb-2">About</h3>
                        <p className="text-lg mb-2">&quot;언어를 사랑하는 개발자 박민정입니다.&quot;</p>
                    </div>
                    <AboutComponent />
                    <div>
                        <h3 className="text-2xl mb-2">Education</h3>
                        <p className="text-lg mb-2">2023.06.29~2023.11.30</p>
                        <p className="text-lg mb-2">(혼합+디지털컨버전스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A</p>
                    </div>
                </div>
            </div>
        </>
    )
}