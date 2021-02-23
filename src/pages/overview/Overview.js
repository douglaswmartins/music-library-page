import '../../styles/pages/overview.css'
import { FiSearch } from 'react-icons/fi'
import tracks from '../../utils/mocks/tracks'
import profileViews from '../../utils/mocks/profileViews'
import featuredPlaylists from '../../utils/mocks/featuredPlaylists'

export default function Overview() {

  return (
    <div className="container-component">

      <div className="wrapper wrapper-search">

        <input
          id="inputSeacher"
          type="text"
          className="input-search"
          placeholder="Search artists, playlist or tracks"
        />
        <label htmlFor="inputSeacher">
          <FiSearch size={25}/>
        </label>

      </div>

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

      <div className="wrapper wrapper-profile-tracks">

        <div className="wrapper wrapper-profile">
          
          <h1 className="text-title">Profile Views</h1>

          <ul className="list">

            {profileViews.map(profile => {
              const { id, name, image, quantity, lastAcess } = profile

              return (
                <li key={id} className="list-item">

                  <div className="wrapper">

                    <div className="container-image">
                      {image}
                    </div>

                    <div className="texts-profile">
                      <h2 className="text-title">{name}</h2>
                      <p className="text-secondary">{lastAcess}</p>
                    </div>

                  </div>

                  <p className="text-secondary text-albums">
                    {quantity}{quantity > 1 ? ' albums' : ' album' }
                  </p>

                </li>
              )
            })}

          </ul>

        </div>

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

      </div>

    </div>
    
  )
}
