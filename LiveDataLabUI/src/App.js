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

import CourseView from './views/CourseView';
import ProjectView from './views/ProjectView';

import './App.css';
import './styling/global.scss';

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
          <Route path="/view-course">
            <CourseView title="CS 410" semester="Fall 2021" description="Text Information Systems" projects="12" />
          </Route>
          <Route path="/view-project">
            <ProjectView title="MP1" description="First MP of the course" due="Sept 18, 2021" completed="true" learners="200" course="CS 410" />
          </Route>
          <Route path="/">
            <HomePage name="Evan" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
