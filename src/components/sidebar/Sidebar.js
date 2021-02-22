import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';

import '../../styles/components/sidebar.css';
import imageProfile from '../../images/profile.jpg';
import sidebarItems from '../../utils/mocks/sidebarItems';

function Sidebar() {
  const [activated, setActivated] = useState(0)
  
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
          {sidebarItems.map((item, index) => {
            return (
              <li
                key={item.name}
                onClick={() => setActivated(index)}
              >
                <p
                  className={
                    (activated === index ? 'active' : '')
                    + ' text-hover-primary'
                  }
                >
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