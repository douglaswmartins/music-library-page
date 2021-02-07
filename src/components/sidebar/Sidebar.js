import '../../styles/components/sidebar.css';
import { IconBase } from 'react-icons';
import { FiSettings } from 'react-icons/fi';
import imageProfile from '../../images/profile.jpg';

import sidebarItems from '../../utils/sidebarItems';

function Sidebar() {
  
  return (
    <div className="container-sidebar">

      <header>

        <img src={imageProfile}/>

        <div className="content-profile">

          <h1 className="text-title">
            Dany Schudler
          </h1>

          <p className="text-hover-primary">
            Edit profile
            <FiSettings size={15}/>
          </p>

        </div>

      </header>

      <main>
        
        <ul className="content-list-sidebar">
          {sidebarItems.map(item => {
            return (
              <li key={item.name}>
                <p className="text-hover-primary">
                  { item.icon }
                  { item.name }
                </p>
              </li>
            )
          })}
        </ul>

      </main>

    </div>
  )
}

export default Sidebar;