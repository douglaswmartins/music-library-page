import {
  FiAperture,
  FiTrello,
  FiMusic,
  FiRadio,
  FiSliders,
  FiMessageSquare,
  FiBell,
  FiUser
} from 'react-icons/fi';

const sidebarItems = [
  { icon: <FiAperture size={18}/>       , name: 'Overview'      },
  { icon: <FiTrello size={18}/>         , name: 'News'          },
  { icon: <FiMusic size={18}/>          , name: 'Playlists'     },
  { icon: <FiRadio size={18}/>          , name: 'Discover'      },
  { icon: <FiSliders size={18}/>        , name: 'Dashboard'     },
  { icon: <FiMessageSquare size={18}/>  , name: 'Messages'      },
  { icon: <FiBell size={18}/>           , name: 'Notifications' },
  { icon: <FiUser size={18}/>           , name: 'Account'       }
]

export default sidebarItems;