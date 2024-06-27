import React from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [items, setItems] = React.useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setItems((prevTodos) => {
      return prevTodos.concat(new Todo(text));
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setItems((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: items,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
