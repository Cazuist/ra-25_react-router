import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Menu from './components/menu/Menu';
import HomePage from './components/menu/HomePage';
import DriftPage from './components/menu/DriftPage';
import TimeAttackPage from './components/menu/TimeAttackPage';
import ForzaPage from './components/menu/ForzaPage';

import PostsWidget from './components/crud/PostsWidget';
import StartPage from './components/crud/StartPage';

function App() {
  const serverUrl = process.env.REACT_APP_URL;

  return (
    <>
      <Router>
        <div className="task-title">Menu</div>
        <div className='menu-wrapper'>
          <Menu />
          <div className="page">
            <Route path="/" exact component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
          </div>
        </div>

        <div className="task-title">CRUD</div>
        <PostsWidget>
          <Switch>            
            <Route path="/">{(props) => <StartPage url={123} />}</Route>
          </Switch>
        </PostsWidget>
      </Router>      
    </>
  );
}

export default App;
