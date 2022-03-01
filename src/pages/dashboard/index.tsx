import FilterIcon from './../../assets/images/filter.svg'
import SearchIcon from './../../assets/images/search.svg'
import RecentOne from './../../assets/images/recent1.svg'
import { Link } from 'react-router-dom';
import RightArrow from './../../assets/images/right-arrow.svg'
import RightArrow2 from './../../assets/images/rightArrow2.svg'
import RecentTwo from './../../assets/images/recent2.svg'
import CategoryArrow from './../../assets/images/category-arrow.svg'
import Category1 from './../../assets/images/p1.svg'
import Category2 from './../../assets/images/p2.svg'
import Category3 from './../../assets/images/p3.svg'
import Category4 from './../../assets/images/p4.svg'
import PublicLayout from '../../components/publicLayout';


const Dashboard = () => {
     return (
          <PublicLayout>
               <main className="page-body-inner">
                    <div className="search-bar-section">
                         <form>
                              <div className="form-field">
                                   <input type="text" className="form-control" placeholder="Search experiences" />
                                   <img src={SearchIcon} alt="Search" />
                              </div>
                              <div className="filter-form">
                                   <img src={FilterIcon} alt="Filter" />
                              </div>
                         </form>
                    </div>
                    <div className="recent-work-section">
                         <h3>Recent Experiences</h3>
                         <div className="recent-task-list">
                              <div className="recent-media">
                                   <img src={RecentOne} alt="recent" />
                              </div>
                              <div className="recent-content-part">
                                   <h3>DeFi Swap</h3>
                                   <p>Swap your digital assets</p>
                                   <Link to="/">+200 users</Link>
                              </div>
                              <button type="button" className="right-arrow">
                                   <img src={RightArrow} alt="Right Arrow" />
                              </button> 
                         </div>
                         <div className="recent-task-list">
                              <div className="recent-media">
                                   <img src={RecentTwo} alt="recent" />
                              </div>
                              <div className="recent-content-part">
                                   <h3>Docu sign</h3>
                                   <p>sign smart contracts seamlessly</p>
                                   <Link to="/">+1K users</Link>
                              </div>
                              <button type="button" className="right-arrow">
                                   <img src={RightArrow} alt="Right Arrow" />
                              </button> 
                         </div>
                    </div>
                    <div className="popular-category-main">
                         <div className="section-heading">
                              <h3>Popular Categories</h3>
                              <Link to="/popular-category">
                                   <span>See All </span>
                                   <img src={RightArrow2} alt="Right Arrow2" />
                              </Link> 
                         </div>
                         <div className="popular-cards-listing">
                              <div className="popular-card">
                                   <div className="popular-card-media">
                                        <img src={Category1} alt="category" />
                                   </div>
                                   <div className="popular-category-name">
                                        <h3>Exchanges</h3>
                                        <img src={CategoryArrow} alt="Category Arrow" />
                                   </div>
                              </div>
                              <div className="popular-card">
                                   <div className="popular-card-media">
                                        <img src={Category2} alt="category" />
                                   </div>
                                   <div className="popular-category-name">
                                        <h3>Games</h3>
                                        <img src={CategoryArrow} alt="Category Arrow" />
                                   </div>
                              </div>
                              <div className="popular-card">
                                   <div className="popular-card-media">
                                        <img src={Category3} alt="category" />
                                   </div>
                                   <div className="popular-category-name">
                                        <h3>Marketplaces</h3>
                                        <img src={CategoryArrow} alt="Category Arrow" />
                                   </div>
                              </div>
                              <div className="popular-card">
                                   <div className="popular-card-media">
                                        <img src={Category4} alt="category" />
                                   </div>
                                   <div className="popular-category-name">
                                        <h3>Defi</h3>
                                        <img src={CategoryArrow} alt="Category Arrow" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </main>
          </PublicLayout>
     )
}

export default Dashboard
