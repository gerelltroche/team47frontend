const Result = () => {
    return (
        <div className={'w-1/2'}>
            <h1>Your song has a score of 20</h1>
            <div className="relative pt-1">
                <div className="overflow-hidden h-8 mb-4 text-xs flex rounded bg-indigo-200">
                    <div
                        style={{width: '20%'}}
                        className="shadow-none flex flex-col text-center whitespace-nowrap
                        text-white justify-center bg-indigo-500" />
                </div>
            </div>

            <p> [song name] by [artist] has a high probability of becoming popular.</p>

            <button>New Song</button>
        </div>
    )
}

export default Result