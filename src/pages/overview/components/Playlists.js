import '../../../styles/components/playlists.css'
import featuredPlaylists from '../../../utils/mocks/featuredPlaylists'

export default function Playlists() {
  return (
    <div className="wrapper wrapper-playlists">

      <h1 className="text-title">Feature Playlists</h1>

      <ul className="carousel">

        {featuredPlaylists.map(playlist => {
          const { id, name, image, quantity } = playlist

          return (
            <li key={id} className="carousel-item">
              
              <div className="container-image">
                {image}
              </div>
  
              <h2 className="text-title">{name}</h2>
  
              <p className="text-secondary">
                {quantity}{quantity > 1 ? ' tracks' : ' track'}
              </p>
  
            </li>
          )
        })}

      </ul>

    </div>
  )
}
