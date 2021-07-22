import FeatureSlider from "./FeatureSlider";

const FeatureList = () => {

    return (
        <div>
            <FeatureSlider featureName={'Danceability'} defaultValue={30}/>
            <FeatureSlider featureName={'Energy'} defaultValue={30}/>
            <FeatureSlider featureName={'Key'} defaultValue={30}/>
            <FeatureSlider featureName={'Loudness'} defaultValue={30}/>
            <FeatureSlider featureName={'Speech'} defaultValue={30}/>
            <FeatureSlider featureName={'Acoustics'} defaultValue={30}/>
            <FeatureSlider featureName={'Instrumentals'} defaultValue={30}/>
            <FeatureSlider featureName={'Liveliness'} defaultValue={30}/>
            <FeatureSlider featureName={'Valence'} defaultValue={30}/>
            <FeatureSlider featureName={'Tempo'} defaultValue={30}/>
            <FeatureSlider featureName={'Duration_ms'} defaultValue={30}/>
            <FeatureSlider featureName={'Age'} defaultValue={30}/>
        </div>
    )
}
export default FeatureList