import { Todo } from "../models"

export const fetchTodosRequest = async (): Promise<Todo[]> => {
  const todos = await (await fetch('/api/todos/')).json()
  return todos
}

export const addTodoRequest = async (todo: string) => {
  await fetch('/api/todo/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo })
  },)
}

export const deleteTodoRequest = async (id: number) => {
  await fetch(`/api/todo/${id}/`, {
    method: 'DELETE',
  })
}