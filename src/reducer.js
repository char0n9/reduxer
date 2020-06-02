const initialState = {
  filter: "SHOW_TODO",
  tasks: [
    { id: 1, title: "Learn HTML", done: true },
    { id: 2, title: "Learn React", done: false },
    { id: 3, title: "Learn Redux", done: true },
  ],
};
const reducer = (state = initialState, action) => {
  let localTasks = state.tasks;

  switch (action.type) {
    case "CHANGE_FILTER":
      return {
        ...state,
        filter: action.filter,
      };
    case "CHANGE_TODO":
      // let index = state.tasks.findIndex((item) => item.id == action.id);
      localTasks[localTasks.findIndex((item) => item.id == action.id)].done =
        action.done;
      return {
        ...state,
        tasks: localTasks,
      };
    default:
      return state;
  }
};

export default reducer;
