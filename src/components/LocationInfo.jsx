import './styles/LocationCard.css'

const LocationInfo = ({location}) => {


 return (
    <article className="Location-card">
        <h2 className='location_title'>{location?.name}</h2>
        <ul className='location_list'>
            <li className='location_itemType'><span className='location_item-type'>Type:</span><span className='location-type'>{location?.type}</span></li>
            <li className='location_itemPopulation'><span className='location_item-population'>Population:</span><span className='location-residents'>{location?.residents.length}</span></li>
            <li className='location_itemDimension'><span className='location_item-dimension'>Dimension:</span ><span className='location-dimension'>{location?.dimension}</span></li>
        </ul>
    </article>
   
  )
}

export default LocationInfo