
export default function Home(){

    const rows = Array.from({length:10});
    const columns = Array.from({length:20});
    const textContent = [
        { letters: "document.textContent".split(""), startRow: 0, startColumn: 0},
        { letters: `="min jeong"`.split(""), startRow: 2, startColumn: 8}
    ]

    return (
        <>
            {rows.map((_, rowIndex) =>
                columns.map((_, colIndex) => {
                    let content = "";
                    textContent.map(item => {
                        if (rowIndex === item.startRow && colIndex >= item.startColumn 
                            && colIndex < item.startColumn + item.letters.length) {
                            content = item.letters[colIndex - item.startColumn];
                        }
                    });
                    return (
                        <div className={`aspect-square flex justify-center items-center min-h-fit shadow-[0_0_0_1px_#d12e2e] text-[4vw] md:text-[3vw] lg:text-[2vw] ${rowIndex * columns.length + colIndex >= 150 ? "md:hidden lg:flex" : "md:flex"} lg:text-[4vw] ${rowIndex * columns.length + colIndex >= 100 ? "hidden" : "flex"}`} key={`${rowIndex}-${colIndex}`}>
                            {content}
                        </div>
                    )
                })
            )}
        </>
    )
}