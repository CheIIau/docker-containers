import { type Component } from 'solid-js'
import { type Todo } from '../models'

interface Props {
  index: number
  todo: Todo
  deleteTodo: (id: number) => void
}

const TodoItem: Component<Props> = (props) => {
  return (
    <li style={{ display: 'flex', 'justify-content': 'space-between' }}>
      <p>{props.index}</p>
      <p>{props.todo.todo}</p>
      <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>
    </li>
  )
}

export default TodoItem
