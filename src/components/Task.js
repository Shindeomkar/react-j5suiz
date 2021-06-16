import React from 'react';
function Task(props) {
  return (
    <p>
      <input type="checkbox" checked={props.task.completed} />
      {props.task.name}
      <br />
      <br />
      <hr />
    </p>
  );
  6;
}
export default Task;
