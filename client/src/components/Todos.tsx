import {
  type Component,
  createSignal,
  For,
  createEffect,
  onMount
} from 'solid-js'
import { type Todo } from '../models'
import TodoItem from './TodoItem'

function createId() {
  return Math.floor(Math.random() * Date.now())
}

interface Props {
  todos: Todo[]
  addTodo: (todo: string) => void
  deleteTodo: (id: number) => void
}

const Todos: Component<Props> = (props) => {
  const [newTodo, setNewTodo] = createSignal('')

  const createTodo = () => {
    if (newTodo() !== '') {
      props.addTodo(newTodo())
      setNewTodo('')
    }
  }
 
  return (
    <div style={{ width: '100%', 'max-width': '700px' }}>
      <header style={{ padding: '16px 24px' }}>
        <For each={props.todos}>
          {(item, i) => (
            <TodoItem index={i() + 1} todo={item} deleteTodo={props.deleteTodo} />
          )}
        </For>
        <input
          type="text"
          value={newTodo()}
          onInput={(event) => {
            setNewTodo(event.currentTarget.value)
          }}
        />
        <button onClick={createTodo}>Add Todo</button>
      </header>
    </div>
  )
}

export default Todos
