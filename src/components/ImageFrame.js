const ImageFrame = ({imageSRC, alt, hoverText, link, className}) => {
    // gotta add hoverText
    if (link) {
        return (
            <a href={link} >
                <p>first</p>
                <img
                    className={className ? className + ' inline object-cover mr-2 rounded-full shadow-lg' :
                        'inline object-cover mr-2 rounded-full shadow-lg'}
                    alt={alt}
                    src={imageSRC}
                />
            </a>
        )
    }
    else {
        return (
            <img
                className={className ? className + ' inline object-cover mr-2 rounded-full shadow-lg' :
                    'inline object-cover mr-2 rounded-full shadow-lg'}
                alt={alt}
                src={imageSRC}
            />
        )
    }
}

export default ImageFrame
