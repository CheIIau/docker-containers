import { A } from '@solidjs/router'
import { type Component, onMount } from 'solid-js'

const App: Component = () => {
  onMount(() => {
   
  })
  return (
    <>
      <p>Some info</p>
      <A class="nav" href="/">
        Home
      </A>
    </>
  )
}

export default App
