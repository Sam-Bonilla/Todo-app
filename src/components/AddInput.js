import React, { useState } from "react";
import styled from "@emotion/styled";
// import { useDispatch } from "react-redux";
// import { saveTodo } from  "../reducers/todoSlice"; 


// const dispatch = useDispatch()

// const addTodo = () => {
//     console.log(`Adding ${Input}`)

//     dispatch(saveTodo({
//         item: Input,
//         done: false,
//         id: Date.now()
//     }))
// }

const Form = styled.form({
  width: "100%",
});

const Input = styled.input({
  width: "100%",
  border: "none",
  padding: 16,
  outline: "none",
  borderRadius: 3,
  marginBottom: 8,
});


export const AddInput = ({ onAdd }) => {
  const [input, setInput] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
      }}
    >
      <Input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add a new todo item here"
      />
    </Form>
  );
};
