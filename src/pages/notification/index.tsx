import { Link } from 'react-router-dom';
import PublicLayout from '../../components/publicLayout';
import BallImage from './../../assets/images/ball.svg'

const Notification = () => {
     return (

          <PublicLayout>
               <main className="page-content-sections">
                    <div className="page-header">
                         <h3> Notifications </h3>
                    </div>
                    <ul className="notification-listing">
                         <li>
                              <div className="notification-avtar">
                                   <img src={BallImage} alt="Ball" />
                              </div>
                              <div className="notify-content">
                                   <h4><Link to="/">CryptoKing.near</Link> requested to sign the contract </h4>
                                   <p>3 days ago</p>
                              </div>
                         </li>
                         <li>
                              <div className="notification-avtar">
                                   <img src={BallImage} alt="Ball" />
                              </div>
                              <div className="notify-content">
                                   <h4><Link to="/">CryptoKing.near</Link> requested to sign the contract </h4>
                                   <p>3 days ago</p>
                              </div>
                         </li>
                         <li>
                              <div className="notification-avtar">
                                   <img src={BallImage} alt="Ball" />
                              </div>
                              <div className="notify-content">
                                   <h4><Link to="/">CryptoKing.near</Link> requested to sign the contract </h4>
                                   <p>3 days ago</p>
                              </div>
                         </li>
                    </ul>
               </main>
          </PublicLayout>

     )
}

export default Notification
