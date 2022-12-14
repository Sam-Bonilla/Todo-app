import { createSlice } from '@reduxjs/toolkit'
// import React, { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
// import styled from "@emotion/styled";

// const Wrapper = styled.div({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   width: 300,
// });

const initialState = [
  {
    id: uuid(),
    label: "Buy groceries",
    checked: false,
  },
  {
    id: uuid(),
    label: "Reboot computer",
    checked: false,
  },
  {
    id: uuid(),
    label: "Ace CoderPad interview",
    checked: true,
  },
]


// function App() {
//   const [todos, setTodos] = useState<Todo[]>(initialState);

//   const addTodo = useCallback((label: string) => {
//     setTodos((prev) => [
//       {
//         id: uuid(),
//         label,
//         checked: false,
//       },
//       ...prev,
//     ]);
//   }, []);

//   const handleChange = useCallback((checked: boolean) => {

//   }, []);


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.push(action.payload)
    },
    }
  });

export const selectTodo = (state) => state.posts.value

export const { saveTodo } = todoSlice.actions

export default todoSlice.reducer