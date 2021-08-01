const FeatureSlider = ({featureName, defaultValue, min = 0, max = 100, step = 1, setAudioFeature, Name}) => {

    const sliderStyles = 'w-11/12 self-center mr-4'
    const labelStyles = 'w-3/12 self-center text-2xl px-4'
    const boxStyles = 'border-l-2 border-black w-16 text-xl h-6 self-center text-right'



    return (
        <div className={'flex w-full'}>

            <label htmlFor={featureName} className={labelStyles}>
                {featureName}
            </label>
            <input
                data-action={'increment, decrement'}
                id={featureName}
                type='range'
                className={sliderStyles}
                onChange={(e) => setAudioFeature({[Name]: e.target.value})}
                value={defaultValue}
                min={min}
                max={max}
                step={step}
            />
            <input type='number' className={boxStyles} value={defaultValue} onChange={(e) => setAudioFeature({featureName: e.target.value})}/>

        </div>
    )
};

export default FeatureSlider