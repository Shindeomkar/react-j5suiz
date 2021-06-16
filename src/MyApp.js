import React from 'react';
import Nav from './components/Nav.js';
import MainContent from './components/MainContent';
import Task from './components/Task.js';
import taskjason from './components/taskjason';
function MyApp() {
const taskcomponemt=taskjason.map(task => <Task task={task}/>)
return(
  <div>
  <Nav />
  <MainContent />
  {taskcomponemt}
  </div>
)
}
export default MyApp;
