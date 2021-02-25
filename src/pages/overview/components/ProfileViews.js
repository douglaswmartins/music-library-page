import '../../../styles/components/profileViews.css'
import profileViews from '../../../utils/mocks/profileViews'

export default function ProfileViews() {
  return (
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
  )
}
