
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
                        <div className={`aspect-square flex justify-center items-center shadow-sm shadow-red-500`} key={`${rowIndex}-${colIndex}`}>
                            {content}
                        </div>
                    )
                })
            )}
        </>
    )
}