import { NextRequest, NextResponse } from "next/server";
interface AboutItem {
    img: string;
    title: string;
    desc: string;
}
interface navItem {
    title : string;
}
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

export const GET = async (req: NextRequest, res: NextResponse): Promise<NextResponse> => {

    const type = req.nextUrl.searchParams.get("type");
    switch (type) {
        case 'about' :
            const data :AboutItem[]= [
                {
                    img: "./images/icons/html.png",
                    title: "html",
                    desc: "웹 페이지의 레이아웃 설정, 콘텐츠 삽입, 하이퍼링크 생성, 폼 생성이 가능합니다."
                },
                {
                    img: "./images/icons/css.png",
                    title: "css",
                    desc: "스타일 지정, 레이아웃 조정, 애니메이션 추가가 가능합니다."
                },
                {
                    img: "./images/icons/javascript.png",
                    title: "javascript",
                    desc: "버튼 클릭 시 팝업창 나타내기나 드롭다운 메뉴 구현 같은 동적 인터랙션이 가능합니다."
                },
                {
                    img: "./images/icons/tailwindcss.png",
                    title: "tailwind",
                    desc: "반응형 웹 페이지를 만들어 다양한 디바이스에서도 최적화된 뷰를 제공할 수 있습니다."
                },
                {
                    img: "./images/icons/react.png",
                    title: "react",
                    desc: "React의 컴포넌트 구조를 활용해 코드 재사용성을 높이고, 유지 보수를 용이하게 할 수 있습니다."
                },
                {
                    img: "./images/icons/typescript.png",
                    title: "typescript",
                    desc: "정적 타입 체킹을 통해 코드의 안정성을 높이고, 버그를 사전에 예방할 수 있습니다. 인터페이스를 활용하여 복잡한 자료구조를 명확하게 표현하고, 재사용 가능한 코드를 작성할 수 있습니다."
                },
                {
                    img: "./images/icons/github.png",
                    title: "git",
                    desc: "코드 변경 사항을 추적하여 언제든지 이전 상태로 복구가 가능하고, 여러 사람이 동시에 작업하는 경우에도 코드 충돌 없이 작업을 진행할 수 있습니다."
                },
                {
                    img: "./images/icons/notion.png",
                    title: "notion",
                    desc: "작업 일정을 관리하거나, 프로젝트에 필요한 정보를 정리하고 공유하는 등의 작업을 한 곳에서 처리할 수 있습니다."
                },
            ]
            return NextResponse.json({data});
        case 'nav':
            case 'nav':
            const dataNav :navItem[]= [
                { title: "About" },
                { title: "Portfolio" },
                { title: "Contact" }
            ]
            return NextResponse.json({dataNav});
        case 'work' :
            const dataWork :workItem[]= [
                {
                    img: "./images/lucky.png",
                    title: "Today's Luck",
                    desc: "운세보기 페이지입니다. API를 이용해서 필요한 데이터를 불러옵니다. 사용자가 정보를 입력하면 오늘의 운세를 확인할 수 있습니다.",
                    skill: "React, Next.js, Tailwindcss, TypeScript",
                    contribution: "20%",
                    period: "2일",
                    view: "https://lucky-tau.vercel.app",
                    git: "https://github.com/Parkminjeong13/lucky.git",
                    type: "Webapp"
                },
                {
                    img: "./images/portfolio.png",
                    title: "Portfolio",
                    desc: "포트폴리오 사이트입니다.",
                    skill: "HTML, CSS, JavaScript, React",
                    contribution: "100%",
                    period: "14일",
                    view: "portfolio-wine-sigma-42.vercel.app",
                    git: "https://github.com/Parkminjeong13/portfolio",
                    type: "Webapp"
                },
                {
                    img: "./images/teamprojectMain.png",
                    title: "Hello Vanilla",
                    desc: "초보 개발자들이 재미있고 간편하게 바닐라 스크립트를 학습할 수 있도록 지원하는 교육 커뮤니티 플랫폼 사이트입니다. 사용자들의 활발한 소통을 지원하고자 다양한 댓글 기능을 구현하였습니다.",
                    skill: "HTML, CSS, JavaScript, React",
                    contribution: "20%",
                    period: "30일",
                    view: "https://hello-vanilla.vercel.app",
                    git: "https://github.com/the02196/hello_vanilla.git",
                    type: "TeamProject"
                },    
                {
                    img: "./images/parcel.png",
                    title: "Parcel",
                    desc: "택배 조회 페이지입니다. 사용자가 택배 송장 번호를 입력하면, API를 호출하여 택배 회사의 데이터베이스에 접근하고, 해당 송장의 배송 상태 정보를 가져와 사용자에게 보여줍니다. TypeScript의 인터페이스를 사용하여 데이터의 구조를 명확하게 정의하여 코드의 가독성을 높였습니다.",
                    skill: "TypeScript, React, Tailwindcss",
                    contribution: "100%",
                    period: "2일",
                    view: "https://parcel-mauve-eight.vercel.app",
                    git: "https://github.com/Parkminjeong13/parcel.git",
                    type: "Webapp"
                },
                {
                    img: "./images/quiz.png",
                    title: "Quiz",
                    desc: "Quiz 페이지입니다. 사용자는 자신이 원하는 문제 유형과 수를 선택할 수 있으며, 랜덤 설정을 통해 다양한 퀴즈를 경험할 수 있습니다. 각 기능별로 상태를 관리하고, 필요한 경우에만 렌더링을 다시 하도록 구현하여 유지보수가 용이합니다. 각 문제와 선택지는 반복문을 통해 동적으로 생성됩니다. 이를 통해 코드의 재사용성을 높이고, 유지보수를 용이하게 하였습니다.",
                    skill: "HTML, CSS, JavaScript, React, Tailwindcss",
                    contribution: "100%",
                    period: "3일",
                    view: "https://quiz-kappa-lilac.vercel.app",
                    git: "https://github.com/Parkminjeong13/quiz.git",
                    type: "Webapp"
                },
                {
                    img: "./images/megaboxMain.png",
                    title: "Megabox",
                    desc: "Megabox 클론코딩 페이지입니다. 원본 사이트는 float이 사용되어 구성되어있으나, 클론 코딩을 하는 과정에서 flex를 사용해 같은 UI, UX 구조를 최대한 동일하게 만들었습니다. flex를 사용하여 사이트를 구현하여 웹 표준을 준수하고, 더 효율적이고 유연한 레이아웃을 구성하였습니다.",
                    skill: "HTML, CSS, JavaScript",
                    contribution: "100%",
                    period: "14일",
                    view: "https://megabox-mu.vercel.app",
                    git: "https://github.com/Parkminjeong13/megabox.git",
                    type: "Clone"
                },
                {
                    img: "./images/subway.png",
                    title: "Subway",
                    desc: "Subway 클론 코딩 페이지입니다. 원본 사이트의 UI, UX를 참고해 레이아웃을 구성하였습니다.",
                    skill: "HTML, CSS, JavaScript",
                    contribution: "100%",
                    period: "5일",
                    view: "https://subway-navy.vercel.app",
                    git: "https://github.com/Parkminjeong13/subway.git",
                    type: "Clone"
                },   
            ]
            return NextResponse.json({dataWork});
        default:
            return NextResponse.json({error: "파라미터가 에러 발생" })
    }    
}