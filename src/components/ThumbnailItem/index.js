import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateActiveImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickingThumbnail = () => {
    updateActiveImageId(id)
  }

  const activateClassName = isActive ? 'image-btn' : ''

  return (
    <li className="thumbnail">
      <button className="btn" type="button">
        <img
          src={thumbnailUrl}
          className={`image ${activateClassName}`}
          alt={thumbnailAltText}
          onClick={onClickingThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
