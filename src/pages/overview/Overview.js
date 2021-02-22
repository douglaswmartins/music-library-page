import '../../styles/pages/overview.css'

import { FiSearch } from 'react-icons/fi'

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
        <div className="carousel-playlist">

        </div>

      </div>

      <div className="wrapper wrapper-profile-views">

        <div>

        </div>

        <div>
          
        </div>

      </div>


    </div>
    
  )
}
