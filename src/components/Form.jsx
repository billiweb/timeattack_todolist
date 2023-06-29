import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

function Form() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [todos, setTodos] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        dispatch({
          type: "ADD_TODO",
          payload: {
            id: shortid.generate(),
            title,
            contents,
            isDone: false,
          },
        });
        setTitle("");
        setContents("");
      }}
    >
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="내용"
        value={contents}
        onChange={(e) => {
          setContents(e.target.value);
        }}
      />
      <button>입력하기</button>
    </form>
  );
}

export default Form;
