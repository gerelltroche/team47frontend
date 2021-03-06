import FeatureSlider from "./FeatureSlider";

const FeatureList = ({audioFeatures, setAudioFeatures}) => {



    return (
        <div>
            <FeatureSlider
                featureName={'Danceability'}
                defaultValue={audioFeatures['Danceability']}
                setAudioFeature={setAudioFeatures}
                min={0}
                max={1}
                step={0.01}
                Name={'Danceability'}
            />
            <FeatureSlider
                featureName={'Energy'}
                defaultValue={audioFeatures['Energy']}
                setAudioFeature={setAudioFeatures}
                min={0}
                max={1}
                step={0.01}
                Name={'Energy'}
            />
            <FeatureSlider
                featureName={'Key'}
                defaultValue={audioFeatures['Key']}
                setAudioFeature={setAudioFeatures}
                min={0}
                max={11}
                step={1}
                Name={'Key'}
            />
            <FeatureSlider
                featureName={'Loudness'}
                defaultValue={audioFeatures['Loudness']}
                setAudioFeature={setAudioFeatures}
                min={-60}
                max={0}
                step={1}
                Name={'Loudness'}
            />
            <FeatureSlider
                featureName={'Speech'}
                defaultValue={audioFeatures['Speech']}
                setAudioFeature={setAudioFeatures}
                min={0}
                max={1}
                step={.01}
                Name={'Speech'}
            />
            <FeatureSlider
                featureName={'Acoustics'}
                defaultValue={audioFeatures['Acoustics']}
                setAudioFeature={setAudioFeatures}
                min={0}
                max={1}
                step={.01}
                Name={'Acoustics'}
            />
            <FeatureSlider
                featureName={'Instrumentals'}
                defaultValue={audioFeatures['Instrumentals']}
                setAudioFeature={setAudioFeatures}
                min={0}
                max={1}
                step={.01}
                Name={'Instrumentals'}
            />
            <FeatureSlider
                featureName={'Liveliness'}
                defaultValue={audioFeatures['Liveliness']}
                setAudioFeature={setAudioFeatures}
                min={0}
                max={1}
                step={.01}
                Name={'Liveliness'}
            />
            <FeatureSlider
                featureName={'Valence'}
                defaultValue={audioFeatures['Valence']}
                setAudioFeature={setAudioFeatures}
                min={0}
                max={1}
                step={.01}
                Name={'Valence'}
            />
            <FeatureSlider
                featureName={'Tempo'}
                defaultValue={audioFeatures['Tempo']}
                setAudioFeature={setAudioFeatures}
                min={1}
                max={200}
                step={1}
                Name={'Tempo'}
            />
            <FeatureSlider
                featureName={'Duration [secs]'}
                defaultValue={audioFeatures['Duration_ms']}
                setAudioFeature={setAudioFeatures}
                min={1}
                max={10000}
                step={1}
                Name={'Duration_ms'}
            />
            <FeatureSlider
                featureName={'Age [days]'}
                defaultValue={audioFeatures['Age']}
                setAudioFeature={setAudioFeatures}
                min={1}
                max={365}
                step={1}
                Name={'Age'}
            />
        </div>
    )
}
export default FeatureList