import ImageFrame from "./ImageFrame";

const SongResult = ({ img, song, options }) => {

    const { imageSRC, alt, hoverText, link } = img
    let { songTitle, artist } = song
    const { rank, allbold, stacked, noartist, largeImage } = options

    let containerStyles = 'flex'
    let textContainerStyles = 'w-80 h-full self-center'
    let titleStyles = 'text-5xl text-center font-bold'
    let artistStyles = 'text-3xl text-center'
    let imageStyles = 'w-40 h-40'

    // option modifications
    if (rank) {
        songTitle = `#${rank} "${songTitle}"`
    }

    if (stacked) {} //implement stacked styles

    if (allbold) {
        artistStyles = artistStyles + ' font-bold'
    }

    if (noartist) {} //implement

    if (largeImage) {}

    containerStyles += ''

    const titleTag = (
        <h1 className={titleStyles}>
            {songTitle}
        </h1>
    )

    const artistTag = (
        <h1 className={artistStyles}>
            {artist}
        </h1>
    )

    return(
            <div className={containerStyles}>
                <ImageFrame hoverText={hoverText} imageSRC={imageSRC} alt={alt} link={link} className={imageStyles} />
                <div className={textContainerStyles}>
                    {titleTag}
                    {artistTag}
                </div>
            </div>
        )
}

export default SongResult