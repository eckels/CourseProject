import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
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

import Logo from './assets/logo.png';
import Account from './assets/account.png';

import {
  recentProjects,
  upcomingProjects,
  allProjects,
  yourCourses,
  allCourses,
  projectSubmissions,
  submissionHistory,
  linkedAccounts
} from './data/data';

import './App.css';
import './styling/global.scss';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-interior">
            <Link to="/CourseProject" className="logo"><img src={Logo} alt="logo" /><h1>LiveDataLab</h1></Link>
            <ul>
              <li>
                <NavLink activeClassName="navactive" to="/CourseProject">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="navactive" to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink activeClassName="navactive" to="/create">Create</NavLink>
              </li>
            </ul>
            <div className="account-div">
              <img src={Account} alt="Account icon" />
              <p className="p-label">Evan Eckels</p>
              <div className="dropdown">
                <Link to="/courses">Courses</Link>
                <Link to="/my-content">My Content</Link>
                <Link to="/accounts">Linked Accounts</Link>
                <button>Log Out</button>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/projects">
            <ProjectsPage recent={recentProjects} upcoming={upcomingProjects} all={allProjects} />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/courses">
            <CoursesPage yourCourses={yourCourses} allCourses={allCourses} />
          </Route>
          <Route path="/my-content">
            <MyContentPage projects={recentProjects} courses={yourCourses} />
          </Route>
          <Route path="/accounts">
            <LinkedAccountsPage accounts={linkedAccounts} />
          </Route>
          <Route path="/view-course">
            <CourseView title="CS 410" semester="Fall 2021" description="Text Information Systems" projcount="12" projects={upcomingProjects} />
          </Route>
          <Route path="/view-project">
            <ProjectView title="MP1" description="First MP of the course" due="Sept 18, 2021" completed="true" learners="200" course="CS 410" submissions={projectSubmissions} />
          </Route>
          <Route path="/">
            <HomePage name="Evan" recent={recentProjects} upcoming={upcomingProjects} submissions={submissionHistory} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
