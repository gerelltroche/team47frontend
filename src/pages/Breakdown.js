import Image from '../assets/logo.svg'
import SongResult from "../components/SongResult";
import FeatureList from "../components/FeatureList";
import Result from "../components/Result";

const Breakdown = ({ song, setSong, setPage, artistName, setArtistName }) => {
    return (
        <div className={'flex flex-col'}>
            <SongResult
                img={{
                    hoverText: 'yes',
                    imageSRC: Image,
                    alt: 'Image-alt'
                }}
                song={{
                    songTitle: song,
                    artist: artistName
                }}
                options={{

                }}
            />
            <FeatureList />
            <Result artist={artistName} song={song} score={50} setPage={setPage}/>
        </div>
    )
}
//             {/*<ImageFrame hoverText={'yes'} imageSRC={Image} alt={'image'} />*/}
export default Breakdown