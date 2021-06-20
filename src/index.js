import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewLink from './NewLink'
import {createStore} from 'redux';
import { Provider} from 'react-redux'
import rootReducer from './RootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
    <Provider store= {store}>
      <Switch>
        <Route path="/" exact component={App}  />
        <Route path="/:shorturl" exact component={NewLink}  />
      </Switch>
      </Provider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);