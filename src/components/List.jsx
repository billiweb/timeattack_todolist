import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function List() {
  const todos = useSelector((state) => {
    // console.log(state.todos);
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Todo</h2>
        {todos
          .filter((todo) => {
            return todo.isDone === false;
          })
          .map((todo) => {
            return (
              <div key={todo.id}>
                <Link to="/:id">상세페이지</Link>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.idDone}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  완료
                </button>
              </div>
            );
          })}
      </div>

      <div>
        <h2>Done</h2>
        {todos
          .filter((todo) => {
            return todo.isDone === true;
          })
          .map((todo) => {
            return (
              <div key={todo.id}>
                <Link to="/:id">상세페이지</Link>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.idDone}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  취소
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List;
