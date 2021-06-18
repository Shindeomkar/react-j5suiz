import React from 'react';
function Task(props) {
  return (
    <p className="taskcss">
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={() => {
          props.handlechange(props.task.id);
        }}
      />
      {props.task.name}
      <br />
      <br />
      <hr />
    </p>
  );
}
export default Task;
