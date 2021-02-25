import '../../styles/pages/overview.css'
import { FiSearch } from 'react-icons/fi'
import Tracks from './components/Tracks'
import Playlists from './components/Playlists'
import ProfileViews from './components/ProfileViews'

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

      < Playlists/>

      <div className="wrapper wrapper-profile-tracks">
        <ProfileViews/>
        <Tracks/>
      </div>

    </div>
  )
}
