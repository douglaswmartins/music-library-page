import view1 from '../../images/view1.jpg'
import view2 from '../../images/view2.jpg'
import view3 from '../../images/view3.jpg'

const profileViews = [
  {
    id: 1,
    name: 'Jenny Villa',
    image: <img src={view1} alt="Imagem Jenny Villa"/>,
    quantity: 4,
    lastAcess: '1 day ago'
  },
  {
    id: 2,
    name: 'Aquila',
    image: <img src={view2} alt="Imagem Aquila"/>,
    quantity: 15,
    lastAcess: '3 days ago'
  },
  {
    id: 3,
    name: 'This is war',
    image: <img src={view3} alt="Imagem This is war"/>,
    quantity: 1,
    lastAcess: '2 week ago'
  }
]

export default profileViews