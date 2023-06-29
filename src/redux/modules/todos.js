import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "공부하기",
    contents: "리엑트 강의듣기",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "공부하기2",
    contents: "리엑트 강의듣기2",
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todos;
