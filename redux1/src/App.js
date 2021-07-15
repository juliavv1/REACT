import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <div><Link to="/users">user page</Link></div>
          <div><Link to="/posts">posts page</Link></div>
          <div><Link to="/comments">comments page</Link></div>

          <Switch>
            <Route path={'/users'} render={() => {
              return <Users/>
            }}/>
            <Route path={'/posts'} component={Posts}/>
            <Route path={'/comments'} component={Comments}/>
          </Switch>
        </div>
      </Router>

  )

}

export default App;
