import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './../src/scss/_main.scss'
import PopularCategory from './pages/catyegory';
import Dashboard from './pages/dashboard';
import Notification from './pages/notification';
import Setting from './pages/settings';


function App() {
  return (
        <Router>         
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/popular-category" component={PopularCategory} />
            <Route exact path="/notification" component={Notification} />
            <Route exact path="/setting" component={Setting} />
          </Switch>
        </Router> 
  );
}

export default App;
