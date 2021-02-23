import playlist1 from '../../images/playlist1.jpg'
import playlist2 from '../../images/playlist2.jpg'
import playlist3 from '../../images/playlist3.jpg'
import playlist4 from '../../images/playlist4.jpg'

const featuredPlaylists = [
  {
    id: 1,
    name: 'Only STARDUST',
    image: <img src={playlist1} alt="Imagem Only STARDUST"/>,
    quantity: 24
  },
  {
    id: 2,
    name: 'Mike Vella',
    image: <img src={playlist2} alt="Imagem Mike Vella"/>,
    quantity: 12
  },
  {
    id: 3,
    name: 'the best singles',
    image: <img src={playlist3} alt="Imagem the best singles"/>,
    quantity: 100
  },
  {
    id: 4,
    name: 'Indie',
    image: <img src={playlist4} alt="Imagem Indie"/>,
    quantity: 35
  }
]

export default featuredPlaylists