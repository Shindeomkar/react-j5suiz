import React from 'react';
import Nav from './components/Nav.js';
import MainContent from './components/MainContent';
import Task from './components/Task.js';
import taskjason from './components/taskjason';
import './style.css';
class MyApp extends React.Component {
  constructor() {
    {
      super();
      this.state = { todo: taskjason };
      this.handlechange=this.handlechange.bind(this)
    }
  }
  handlechange(id)
  {
    this.setState(prevstate => {
      const updatedtodo = prevstate.todo.map(itr => {
      if(itr.id ==id)
      {itr.completed=!itr.completed
      }
      return itr
    })
    return {todo:updatedtodo}
     })
  }
  render() {
    const taskcomponemt = this.state.todo.map(task => (
      <Task key={task.id} task={task}  handlechange={this.handlechange} />
    ));
  
    return (
      <div>
        <Nav />
        <MainContent />
        {taskcomponemt}
      </div>
    );
  }
}

export default MyApp;
