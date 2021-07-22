import {useEffect, useState} from "react";

const FeatureSlider = ({featureName, defaultValue}) => {

    const [value, setValue] = useState(0)
    const sliderStyles = 'w-11/12 self-center mr-4'
    const labelStyles = 'w-3/12 self-center text-2xl px-4 w-1/8'
    const boxStyles = 'border-l-2 p-1 border-black w-12 text-xl h-4 self-center'

    useEffect((e) => {
        setValue(defaultValue)
    }, [defaultValue])

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
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <input type='number' className={boxStyles} value={value} onChange={(e) => setValue(e.target.value)}/>

        </div>
    )
};

export default FeatureSlider