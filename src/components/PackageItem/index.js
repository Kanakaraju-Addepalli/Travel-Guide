import './index.css'

const PackageItem = props => {
  const {packageData} = props
  const {imageUrl, description, name} = packageData
  return (
    <li className="list-location">
      <div className="card">
        <img src={imageUrl} alt={name} className="image" />
        <div className="content">
          <h1 className="heading">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default PackageItem
