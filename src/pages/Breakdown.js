import Image from '../assets/logo.svg'
import SongResult from "../components/SongResult";
import FeatureList from "../components/FeatureList";
import Result from "../components/Result";

const Breakdown = ({ song, setSong, setPage }) => {
    return (
        <div>
            <SongResult
                img={{
                    hoverText: 'yes',
                    imageSRC: Image,
                    alt: 'Image-alt'
                }}
                song={{
                    songTitle: song,
                    artist: 'artist'
                }}
                options={{

                }}
            />
            <FeatureList />
            <Result />
        </div>
    )
}
//             {/*<ImageFrame hoverText={'yes'} imageSRC={Image} alt={'image'} />*/}
export default Breakdown