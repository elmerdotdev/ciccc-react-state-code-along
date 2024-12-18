import { useState } from "react"
import TodoItem from "./TodoItem"
import { Todo } from "../types/todo.types"

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Wash plates", completed: true },
    { id: 2, text: "Feed mouse", completed: true }
  ])
  const [todoInput, setTodoInput] = useState<string>("")

  const handleAddTodo = () => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        text: todoInput,
        completed: false
      }
    ])
    setTodoInput("") // clear the todo input
  }

  const handleUpdateTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h2>To Dos</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem
            todoItem={todo}
            key={todo.id}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        ))}
      </ul>
      <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default Todos