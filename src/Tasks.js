import React from "react";
import { connect } from "react-redux";

const Tasks = ({ tasks, filter, dispatch }) => {
  console.log(tasks);
  return filter == "SHOW_DONE"
    ? tasks
        .filter((item) => item.done)
        .map((item) => (
          <label>
            <input
              type="checkbox"
              checked={item.done}
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_TODO",
                  done: !item.done,
                  id: item.id,
                })
              }
            />
            {item.title}
          </label>
        ))
    : filter == "SHOW_TODO"
    ? tasks
        .filter((item) => !item.done)
        .map((item) => (
          <label>
            <input
              type="checkbox"
              checked={item.done}
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_TODO",
                  done: !item.done,
                  id: item.id,
                })
              }
            />
            {item.title}
          </label>
        ))
    : tasks.map((item) => (
        <label>
          <input
            type="checkbox"
            checked={item.done}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_TODO",
                done: !item.done,
                id: item.id,
              })
            }
          />
          {item.title}
        </label>
      ));
};

const mapStateToProps = (state) => ({
  filter: state.filter,
  tasks: state.tasks,
});
export default connect(mapStateToProps)(Tasks);
