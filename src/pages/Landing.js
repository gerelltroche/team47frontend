import logo from '../assets/logo.svg'

const Landing = ({ song, setSong, setPage }) => {

    const submitHandler = (e) => {
        e.preventDefault()
        setPage('breakdown')
    }

    return (
        <div className={'h-screen w-screen flex flex-col items-center justify-center bg-gray-100'}>

            <img src={logo} className={'w-8/12 mb-5 lg:w-1/2 2xl:w-4/12 lg:mb-20'} alt={'logo'}/>
            <form className="flex w-11/12 lg:w-8/12 flex-wrap items-stretch" onSubmit={(e) => submitHandler(e)}>

                <span
                    className="z-10 h-full w-8 leading-snug font-normal absolute text-center text-blueGray-300
                   absolute bg-transparent rounded text-base items-center justify-center pl-3 py-3">
                <i className="fas fa-lock" />
                </span>
                <input type="text" placeholder="Please enter your song"
                       className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white
                        bg-white rounded text-lg border-0 shadow outline-none focus:outline-none focus:ring
                         w-full pl-10"
                       onChange={(e) => setSong(e.target.value)}
                       value={song}
                />
            </form>

        </div>
    );
}

export default Landing;
