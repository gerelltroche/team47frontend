import Landing from './pages/Landing'
import Breakdown from "./pages/Breakdown";
import {useState} from "react";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {

    const [ page, setPage ] = useState('home')
    const [ loading, setLoading ] = useState(false)
    const [ song, setSong ] = useState('')
    const [ songs, setSongs ] = useState({})
    const [ songSelection, setSongSelection ] = useState({
        'name': '',
        'artist': '',
        'age': '',
        'id': '',
    })
    const [ artistName, setArtistName ] = useState('artist-name')
    const [ audioFeatures, setAudioFeatures ] = useState({
        'Danceability': 0,
        'Energy': 0,
        'Key': 0,
        'Loudness': 0,
        'Speech': 0,
        'Acoustics': 0,
        'Instrumentals': 0,
        'Liveliness': 0,
        'Valence': 0,
        'Tempo': 0,
        'Duration': 0,
        'Age': 0,
    })

    const selectSong = (selection) => {
        if (!(typeof(selection) === typeof(1))) {
            throw Error('TypeError: selectSong input must be integer')
        }
        if (selection > 5) {
            throw Error('selectSong input must be 1-5')
        }
        if (!songs[`song${selection}`]) {
            throw Error(`RefError: selectSong selection ${selection} does not exist`)
        }

        const song = `song${selection}`

        setSongSelection({
            'name': songs[song]['spotify_name'],
            'artist': songs[song]['spotify_artist'],
            'age': songs[song]['spotify_age'],
            'id': songs[song]['spotify_id'],
        })
    }

    const updateAudioFeature = (features) => {
        let oldfeature = {}
        console.log(features)
        for (const feature of Object.keys(audioFeatures)) {
            oldfeature[capitalizeFirstLetter(feature)] = audioFeatures[capitalizeFirstLetter(feature)]
        }
        for (const feature of Object.keys(features)) {
            oldfeature[capitalizeFirstLetter(feature)] = features[feature]
        }
        setAudioFeatures(oldfeature)
    }

    if (page === 'home') {
        return <Landing
            loading={loading}
            setLoading={setLoading}
            setSong={setSong}
            song={song}
            setPage={setPage}
            songs={songs}
            setSongs={setSongs}
            audioFeatures={audioFeatures}
            setAudioFeatures={updateAudioFeature}
            songSelection={songSelection}
            selectSong={selectSong}
        />
    }

    if (page === 'breakdown') {
        return <Breakdown
            song={song}
            setSong={setSong}
            setPage={setPage}
            artistName={artistName}
            setArtistName={setArtistName}
            songs={songs}
            setSongs={setSongs}
            audioFeatures={audioFeatures}
            setAudioFeatures={updateAudioFeature}
            songSelection={songSelection}
            selectSong={selectSong}
        />
    }

}

export default App;
