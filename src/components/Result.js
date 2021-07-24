const Result = ({ score, song: songName, artist: artistName, setPage }) => {

    const buttonPressHandler = (e) => {
        e.preventDefault()
        setPage('home')
    }

    songName = songName.charAt(0).toUpperCase() + songName.slice(1)
    artistName = artistName.charAt(0).toUpperCase() + artistName.slice(1)

    return (
        <div className={'flex flex-col w-10/12 self-center'}>
            <h1 className={'self-center text-4xl m-8'}>Your song has a score of {score}</h1>
            <div className="relative pt-1 w-1/2 self-center">
                <div className="overflow-hidden h-10 mb-4 text-xs flex rounded bg-indigo-200">
                    <div
                        style={{width: `${score}%`}}
                        className="shadow-none flex flex-col text-center whitespace-nowrap
                        text-white justify-center bg-blue-600" />
                </div>
            </div>

            <p className={'self-center m-8 text-lg'}>
                <span className={'text-xl'}>{songName}</span> by
                <span className={'text-xl'}> {artistName} </span>
                 has a high probability of becoming popular.
            </p>

            <button
                className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-80 h-14 text-3xl self-center'}
                onClick={(e) => buttonPressHandler(e)}
            >New Song</button>
        </div>
    )
}

export default Result