import { Todo } from "../types/todo.types"

type Props = {
  todoItem: Todo,
  onDelete: (id: number) => void,
  onUpdate: (id: number) => void
}

const TodoItem = ({ todoItem, onDelete, onUpdate }: Props) => {
  return (
    <li style={{ color: todoItem.completed ? 'green' : 'red' }}>
      {todoItem.id} - {todoItem.text} {todoItem.completed ? "Completed" : "Not Completed"}
      <button onClick={() => onDelete(todoItem.id)}>Delete</button>
      <button onClick={() => onUpdate(todoItem.id)}>
        {todoItem.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
    </li>
  )
}

export default TodoItem