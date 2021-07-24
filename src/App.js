import Landing from './pages/Landing'
import Breakdown from "./pages/Breakdown";
import { useState} from "react";

const App = () => {

    const [ page, setPage ] = useState('home')
    const [ song, setSong ] = useState('')
    const [ artistName, setArtistName ] = useState('artist-name')

    if (page === 'home') {
        return <Landing
            setSong={setSong}
            song={song}
            setPage={setPage}
        />
    }

    if (page === 'breakdown') {
        return <Breakdown
            song={song}
            setSong={setSong}
            setPage={setPage}
            artistName={artistName}
            setArtistName={setArtistName}
        />
    }

}

export default App;
