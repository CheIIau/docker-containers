import { onMount, type Component, createSignal } from 'solid-js'
import Todos from '../components/Todos'
import { A } from '@solidjs/router'
import { Todo } from '../models'
import { addTodoRequest, deleteTodoRequest, fetchTodosRequest } from '../api'

function createId() {
  return Math.floor(Math.random() * Date.now())
}

const App: Component = () => {
  const [todos, setTodos] = createSignal<Todo[]>([])
  onMount(async () => {
    const fetchedTodos = await fetchTodosRequest()
    setTodos(fetchedTodos)
  })

  const deleteTodo = async (id: number) => {
    setTodos(todos().filter((todo) => todo.id !== id))
    await deleteTodoRequest(id)
  }

  const addTodo = async (todo: string) => {
    try {
      setTodos([...todos(), { id: createId(), todo }])
      await addTodoRequest(todo)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Todos todos={todos()} deleteTodo={deleteTodo} addTodo={addTodo} />
      <A class="nav" href="/info">
        Info
      </A>
    </>
  )
}

export default App
