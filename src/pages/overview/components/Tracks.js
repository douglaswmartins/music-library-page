import '../../../styles/components/tracks.css'
import tracks from '../../../utils/mocks/tracks'

export default function Tracks() {
  return (
    <div className="wrapper wrapper-tracks">
      
      <h1 className="text-title">Tracks</h1>

      <ul className="carousel">

        {tracks.map(track => {
          const { id, name, image, album } = track

          return (
            <li key={id} className="carousel-item">
              
              <div className="container-image">
                {image}
              </div>
  
              <h2 className="text-title">{name}</h2>
  
              <p className="text-secondary">{album}</p>
  
            </li>
          )
        })}

      </ul>

    </div>
  )
}
