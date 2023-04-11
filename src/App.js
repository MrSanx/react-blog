import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/blog/:id" component={BlogPost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
