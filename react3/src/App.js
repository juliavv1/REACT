import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from "./users/Users";
import Posts from "./posts/Posts";
import Comments from "./comments/Comments";
import UserDetails from "./UserDetails/UserDetails";
import User from "./users/User";

export default function App() {
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