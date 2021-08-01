import Image from '../assets/logo.svg'
import SongResult from "../components/SongResult";
import FeatureList from "../components/FeatureList";
import Result from "../components/Result";

const Breakdown = ({ song, setSong, setPage, artistName, setArtistName, songs, setSongs, songSelection, selectSong, audioFeatures, setAudioFeatures }) => {

    return (
        <div className={'flex flex-col'}>
            <SongResult
                img={{
                    hoverText: 'yes',
                    imageSRC: Image,
                    alt: 'Image-alt'
                }}
                song={{
                    songTitle: songs['spotify_name'],
                    artist: songs['spotify_artist']
                }}
                options={{

                }}
            />
            <FeatureList
                audioFeatures={audioFeatures}
                setAudioFeatures={setAudioFeatures}
            />
            <Result
                artistName={songSelection['artist']}
                songName={songSelection['name']}
                score={20}
                setPage={setPage}
            />
        </div>
    )
}
//             {/*<ImageFrame hoverText={'yes'} imageSRC={Image} alt={'image'} />*/}
export default Breakdown