import './index.css'

const Thumbnail = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails

  return (
    <div className="thumbnail-container">
      <img src={imageUrl} alt={imageAltText} className="thumbnail-image" />
    </div>
  )
}

export default Thumbnail
