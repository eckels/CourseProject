import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CreatePage from './pages/CreatePage';
import CoursesPage from './pages/CoursesPage';
import MyContentPage from './pages/MyContentPage';
import LinkedAccountsPage from './pages/LinkedAccountsPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/"><h1>LiveDataLab</h1></Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
          <div>
            <Link to="/courses">Courses</Link>
            <Link to="/my-content">My Content</Link>
            <Link to="/accounts">Linked Accounts</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/courses">
            <CoursesPage />
          </Route>
          <Route path="/my-content">
            <MyContentPage />
          </Route>
          <Route path="/accounts">
            <LinkedAccountsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
